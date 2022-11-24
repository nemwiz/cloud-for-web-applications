## Installing Docker

Docker is free to use and install for [personal and education projects](https://www.docker.com/pricing/).

If you are running Windows, [please use WSL2](https://docs.docker.com/desktop/windows/install/) since it works much better on Windows.

## Starting the dev environment

Note: Please adjust the paths to match your directories

Note: For Windows and WSL2, checkout this repo somewhere on the WSL path e.g. `\\wsl$\` and mount the container from there.

To set up your dev environment, run below:

WSL2/Windows/MacOS:
`docker build -t cloud-for-web-apps-dev-environment .`

MacOS with M1 chipset:
`docker build -t cloud-for-web-apps-dev-environment -f Dockerfile.m1 .`

To start the container run below:

`docker run -d --name dev-env --mount type=bind,source="$PWD",target=/app --mount type=bind,source=/home/nemanja/.aws,target=/root/.aws -p 4444:3000 -p 4555:4200 cloud-for-web-apps-dev-environment`

For WSL2 and Windows run:

`docker run -d --name dev-env --mount type=bind,source="$PWD",target=/app --mount type=bind,source=/mnt/c/Users/neni/.aws,target=/root/.aws -p 4444:3000 -p 4555:4200 cloud-for-web-apps-dev-environment`

For MacOS with M1 chip:

`docker run -d --name dev-env --mount type=bind,source="$PWD",target=/app --mount type=bind,source=/Users/wil/.aws,target=/root/.aws -p 4444:3000 -p 4555:4200 --platform linux/amd64 cloud-for-web-apps-dev-environment`

This command `docker exec -it dev-env /bin/bash` will open up the terminal inside your dev environment container.
Run your commands from this terminal only as it has all the tools that are needed, you don't need to install anything.

