FROM ubuntu:22.04 as builder
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        ca-certificates \
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
RUN curl -O https://dl.google.com/go/go1.17.linux-${TARGETARCH}.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.linux-${TARGETARCH}.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"
COPY code/ /code/

WORKDIR /code
ARG USE_TMPFS=true
RUN --mount=type=tmpfs,target=/tmpfs \
    [ "$USE_TMPFS" = "true" ] && ln -s /tmpfs /root/go; \
    go build -ldflags "-s -w" -o /api


FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        ca-certificates \
        curl \
        hostapd \
        inetutils-ping \
        iproute2 \
        iw \
        jc \
        jq \
        nano \
        net-tools \
        netcat \
        nftables \
        systemd \
    && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y \
        git \
    && rm -rf /var/lib/apt/lists/*
COPY scripts /scripts/
# iw list json parser
RUN mkdir -p /root/.local/share/jc/jcparsers
COPY scripts/iw_*.py /root/.local/share/jc/jcparsers

COPY --from=builder /api /
ENTRYPOINT ["/scripts/startup.sh"]
