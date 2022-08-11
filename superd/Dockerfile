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
RUN curl --retry 20 --retry-all-errors -o go.tar.gz https://dl.google.com/go/go1.17.linux-${TARGETARCH}.tar.gz && \
    rm -rf /usr/local/go && \
    tar -C /usr/local -xzf go.tar.gz && \
    rm -f go.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"
COPY code/ /code/
WORKDIR /code/
ARG USE_TMPFS=true
RUN --mount=type=tmpfs,target=/tmpfs \
    [ "$USE_TMPFS" = "true" ] && ln -s /tmpfs /root/go; \
    go build -ldflags "-s -w" -o /superd

FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        inetutils-ping \
        iproute2 \
        nano \
        net-tools \
        netcat \
        nftables \
    && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y \
        docker-compose \
        docker.io \
        git \
    && rm -rf /var/lib/apt/lists/*
COPY --from=builder /superd /
COPY scripts /scripts
ENTRYPOINT ["/scripts/startup.sh"]
