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
RUN mkdir /code/
WORKDIR /code/
ARG TARGETARCH
RUN curl --retry 20 --retry-all-errors -o go.tar.gz https://dl.google.com/go/go1.17.linux-${TARGETARCH}.tar.gz && \
    rm -rf /usr/local/go && \
    tar -C /usr/local -xzf go.tar.gz && \
    rm -f go.tar.gz
ENV PATH="/usr/local/go/bin:$PATH"
RUN git clone https://github.com/TimothyYe/godns.git
WORKDIR godns/cmd/godns
ARG USE_TMPFS=true
RUN --mount=type=tmpfs,target=/tmpfs \
    [ "$USE_TMPFS" = "true" ] && ln -s /tmpfs /root/go; \
    go mod download && go build
WORKDIR /code/
COPY code/* .
RUN --mount=type=tmpfs,target=/tmpfs go build

FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
        ca-certificates \
        inetutils-ping \
        iproute2 \
        nano \
        net-tools \
        netcat \
        nftables \
    && rm -rf /var/lib/apt/lists/*
COPY --from=builder /code/godns/cmd/godns/godns /
COPY --from=builder /code/dyndns_plugin /
ENTRYPOINT ["/dyndns_plugin"]
