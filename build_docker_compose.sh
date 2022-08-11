#!/bin/bash -eu
if [ '!' -d "configs/" ]; then
  echo Configs not initialized
  echo Copy base/template_configs to ./configs and set up base/config/config.sh and base/config/auth_users.json
  echo See the guide for help: https://www.supernetworks.org/pages/docs/setup_run_spr
  exit 1
fi

if ! command -v jq >/dev/null; then
  echo Please install the jq tool
  exit 1
fi


# remove prebuilt images
FOUND_PREBUILT_IMAGE=false
for SERVICE in $(docker-compose config --services); do
  IS_PREBUILT=$(docker inspect \
    --format '{{ index .Config.Labels "org.supernetworks.ci" }}' \
    "ghcr.io/spr-networks/super_${SERVICE}" \
    2>/dev/null || echo "false" \
  )
  if [ "$IS_PREBUILT" = "true" ]; then
    IMAGE="ghcr.io/spr-networks/super_${SERVICE}"
    echo "Removing prebuilt image ${IMAGE}"
    docker image rm -f "$IMAGE"
    FOUND_PREBUILT_IMAGE=true
  fi
done

if [ "$FOUND_PREBUILT_IMAGE" = "true" ]; then
    echo "Pruning dangling container images"
    docker image prune -f
fi


# gen configs
if [ ! -f configs/dhcp/coredhcp.yml ]; then
  ./configs/scripts/gen_coredhcp_yaml.sh > configs/dhcp/coredhcp.yml
  ./configs/scripts/gen_hostapd.sh > configs/wifi/hostapd.conf
  ./configs/scripts/gen_watchdog.sh  > configs/watchdog/watchdog.conf
fi

# make sure state directories and files exist
mkdir -p state/api/
mkdir -p state/dhcp/
mkdir -p state/dns/
mkdir -p state/wifi/
mkdir -p state/wifi/sta_mac_iface_map/
touch state/dns/local_mappings state/dhcp/leases.txt


# We use docker buildx so we have the option of building multi-platform images.
#
# With buildx, the actual build takes place inside a builder container. This
# container is managed by the local Docker daemon but is otherwise separate
# from it, and they do not share images or a layer cache.
#
# Accordingly, we have to export our built images from the builder container to
# the local Docker daemon if we want to run them. However, this is only
# possible for single-platform images due to current limitations.
BAKEOPTS=()

docker buildx create --name super-builder --driver docker-container \
  2>/dev/null || true

# Translate the docker-compose.yml to JSON and look for any images that would
# be built multi-platform. 
IS_MULTIPLATFORM=$(
  docker buildx bake \
    --builder super-builder \
    --file docker-compose.yml \
    ${BAKEOPTS[@]-} "$@" \
    --print --progress none \
  | jq 'any(.target[].platforms//[]|map(split(",";"")[])|unique; length >= 2)'
)

# If this is a single-platform build, then by default load it into Docker
echo Is this a multi-platform build? ${IS_MULTIPLATFORM}
if [ "$IS_MULTIPLATFORM" = "false" ]; then
  BAKEOPTS+=(--load)
fi

# Make GitHub credentials available at build-time if present
if [ -f .github_creds ]; then
  BAKEOPTS+=(--set "*.args.GITHUB_CREDS=`cat .github_creds`")
fi

# Local builds will reuse the same builder container and therefore the same
# layer cache for faster builds.
#
# For CI builds, we need to export the cache to a directory that gets persisted
# across jobs. Two notes:
#
#   - Each container image must have a separate cache directory, so we use one
#     subdirectory per service (moby/buildkit #3026)
#
#   - Use a different directory for CACHE_FROM_DIR as CACHE_TO_DIR, so that we
#     do not accumulate stale cache entries (moby/buildkit #1896)
if [ -n "${CACHE_FROM_DIR:-}" ]; then
  for SERVICE in $(docker-compose config --services); do
    BAKEOPTS+=(--set "${SERVICE}.cache-from=type=local,src=${CACHE_FROM_DIR}/${SERVICE}/")
  done
fi
if [ -n "${CACHE_TO_DIR:-}" ]; then
  for SERVICE in $(docker-compose config --services); do
    # Use mode=max for caching of intermediate stages as well
    BAKEOPTS+=(--set "${SERVICE}.cache-to=type=local,dest=${CACHE_TO_DIR}/${SERVICE}/,mode=max")
  done
fi

set +e
docker buildx bake \
  --builder super-builder \
  --file docker-compose.yml \
  ${BAKEOPTS[@]-} "$@"
ret=$?

if [ "$ret" -ne "0" ]; then
  echo
  echo "Tip: if the build failed to resolve domain names," 
  echo "consider running ./base/docker_nftables_setup.sh"
  echo "since iptables has been disabled for docker in the"
  echo "SPR installer"
fi

exit $ret