FROM ubuntu:22.04 as builder
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        ca-certificates \
        clang \
        curl \
        git \
        inetutils-ping \
        iproute2 \
        nano \
        net-tools \
        netcat \
        nftables \
    && rm -rf /var/lib/apt/lists/*
RUN mkdir /code
WORKDIR /code

ARG TARGETARCH
RUN curl --retry 20 --retry-all-errors -o go.tar.gz https://dl.google.com/go/go1.17.linux-${TARGETARCH}.tar.gz && \
    rm -rf /usr/local/go && \
    tar -C /usr/local -xzf go.tar.gz && \
    rm -f go.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"

# Build CoreDHCP
ENV CC=clang
ARG CACHEBUST=1
RUN git clone https://github.com/spr-networks/coredhcp
WORKDIR /code/coredhcp
ARG USE_TMPFS=true
RUN --mount=type=tmpfs,target=/tmpfs \
    [ "$USE_TMPFS" = "true" ] && ln -s /tmpfs /root/go; \
    go build -o /coredhcpd ./cmds/coredhcp && \
    go build -o /coredhcp_client ./cmds/exdhcp/dhclient/


FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        ca-certificates \
        curl \
        inetutils-ping \
        iproute2 \
        nano \
        net-tools \
        netcat \
        nftables \
    && rm -rf /var/lib/apt/lists/*
COPY --from=builder /coredhcpd /
COPY --from=builder /coredhcp_client /
COPY scripts /scripts

ENTRYPOINT ["/scripts/startup.sh"]
