#!/bin/bash -eu
if [ '!' -d "configs/" ]; then
  echo Configs not initialized
  echo Copy base/template_configs to ./configs and set up base/config/config.sh and base/config/auth_users.json
  echo See the guide for help: https://www.supernetworks.org/pages/docs/setup_run_spr
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

BUILDARGS=""
if [ -f .github_creds ]; then
  BUILDARGS="--set *.args.GITHUB_CREDS=`cat .github_creds`"
fi

# We use docker buildx so we can build multi-platform images. Unfortunately,
# a limitation is that multi-platform images cannot be loaded from the builder
# into Docker.
docker buildx create --name super-builder --driver docker-container \
  2>/dev/null || true

# Look for any images that would be built multi-platform
IS_MULTIPLATFORM=$(
  docker buildx bake \
    --builder super-builder \
    --file docker-compose.yml \
    ${BUILDARGS} "$@" \
    --print --progress none \
  | jq 'any(.target[].platforms//[]|map(split(",";"")[])|unique; length >= 2)'
)

# If this is a single-platform build, then by default load it into Docker
echo Is this a multi-platform build? ${IS_MULTIPLATFORM}
if [ "$IS_MULTIPLATFORM" = "false" ]; then
  BUILDARGS="$BUILDARGS --load"
fi

docker buildx bake \
  --builder super-builder \
  --file docker-compose.yml \
  ${BUILDARGS} "$@"

ret=$?

if [ "$ret" -ne "0" ]; then
  echo "Tip: if the build failed to resovle domain names," 
  echo "consider running ./base/docker_nftables_setup.sh"
  echo "since iptables has been disabled for docker in the"
  echo "SPR installer"
fi
