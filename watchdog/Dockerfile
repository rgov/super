FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        netbase \
        watchdog \
    && rm -rf /var/lib/apt/lists/*
COPY scripts /scripts

ENTRYPOINT /scripts/startup.sh
