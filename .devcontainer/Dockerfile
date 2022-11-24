FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends curl vim zip unzip openssl jq git-all ca-certificates && update-ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"  \
    && unzip awscliv2.zip \
    && ./aws/install \
    && curl -fsSL https://get.pulumi.com | bash

CMD ["sleep", "infinity"]