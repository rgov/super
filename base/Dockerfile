FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        ca-certificates \
        curl \
        inetutils-ping \
        iproute2 \
        iptables \
        nano \
        net-tools \
        netcat \
        nftables \
    && rm -rf /var/lib/apt/lists/*
COPY scripts /scripts

ENTRYPOINT /scripts/startup.sh
