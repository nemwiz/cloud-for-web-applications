FROM ubuntu:20.04
RUN apt-get update && apt-get install -y --no-install-recommends curl vim zip unzip openssl jq ca-certificates && update-ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"  \
    && unzip awscliv2.zip \
    && ./aws/install \
    && curl -fsSL https://get.pulumi.com | bash

CMD ["sleep", "infinity"]