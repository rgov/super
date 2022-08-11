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
RUN curl -O https://dl.google.com/go/go1.17.linux-${TARGETARCH}.tar.gz
RUN rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.linux-${TARGETARCH}.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"
ENV CC=clang
ARG USE_TMPFS=true
RUN --mount=type=tmpfs,target=/tmpfs \
    [ "$USE_TMPFS" = "true" ] && ln -s /tmpfs /root/go; \
    go mod init multicastproxy && \
    go get golang.org/x/net/ipv4@latest && \
    go get github.com/vishvananda/netlink@latest
COPY code/multicastproxy.go /code/
RUN --mount=type=tmpfs,target=/tmpfs \
    go build -ldflags="-s -w" multicastproxy.go

FROM  ubuntu:22.04
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
RUN mkdir /code/
COPY --from=builder /code/multicastproxy /code/
COPY scripts /scripts/

ENTRYPOINT ["/scripts/startup.sh"]
