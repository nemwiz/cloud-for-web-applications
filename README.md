# Cloud for web applications workshop

# Before the workshop

## Prerequisite

1. Create a [Github account](https://github.com/)
2. Set up an AWS account
3. Create a [Pulumi account](https://app.pulumi.com/signin)

## Starting the dev environment

We use [Github Codespaces](https://github.com/features/codespaces) for this workshop.
To start your Github codespace:

- Open up your browser and log in to Github
- Click the green "Code" button
- Click create codespace

After a few moments, a new tab will open with VS code and our environment.
Even though it runs in the browser, this environment behaves like you would run it on your local machine.

## Setting up the AWS account and user

Important: In order to attend this workshop you need to create your own AWS account.
We won't be generating any costs during this workshop. We will also close the account after the workshop is completed.

To create an AWS account, please follow [these instructions](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

## Create a Pulumi account

Please visit [Pulumi sign up](https://app.pulumi.com/signin) page to create an account.

# During the workshop

## Creating an AWS user

You can also look at the video below.

- Log in with the root user account (see above)
- Go to IAM dashboard
- Select **Users** on the left side and click **Add users** button in the top right
- For username, please use the following convention **<your-Zuhlke-shortcode>-fe-workshop** e.g. *neni-fe-workshop*
- Select both **Programmatic access** and **AWS Management Console access** options
- You can untick the **Require password reset** box
- Go to the next page
- Select the **Attach existing policies** box
- Search and select **AdministratorAccess**
- Go to the next page
- We won't be adding any tags so we can skip this one
- Review the details and click the **Create user** button
- **Important**: Download the `.csv` file with credentials and store it.
You won't be able to access this page anymore

![Demo](./create-aws-user-demo.gif)

## Adding AWS profile

You can also look at the video below.

- Open the terminal
- Run `aws configure --profile <your-zuhlke-shortcode>-fe-workshop`
- Follow the steps and copy the secret and access key from the `new_user_credentials.csv` file. See above step on creating AWS user
- For region please key in `ap-southeast-1`
- For output name you can skip by pressing `Enter`

![Demo](./create-aws-profile.gif)

## Connecting the repo with your Pulumi account

You can also look at the video below.

- Log in to your Pulumi account
- Click **Settings** and select **Access Tokens** in the left menu
- Create a new token and store the token somewhere
- Open the terminal
- Run `npm install`
- Run `pulumi login` and pass the token that we just created
- Run `pulumi stack` and select **create new stack**
- Name your stack `dev`
- Configure Pulumi to use your AWS profile by running `export AWS_PROFILE=<your-zuhlke-shortcode>-fe-workshop`

![Demo](./create-pulumi-access.gif)

## Deploying the infrastructure 

Our infrastructure is located in `index.ts`. To deploy it we need to run `pulumi up` command.

## Publishing the web app with Docker to ElasticBeanstalk

- `chmod +x deploy-eb.sh`
- `./deploy-eb.sh`

This script will create a zip file called `web-app.zip`. The zip file then needs to be uploaded to ElasticBeanstalk via AWS console.

## Publishing the web app to S3

- `chmod +x deploy-s3.sh` 
- `./deploy-s3.sh`

This script will build your app and deploy it to the bucket.

## Running the web app

`cd` into `src/web-app` and run `npm start`.

## Running the admin app locally

`cd` into `src/admin-app` and run `npm start`.

## Running the code in a local Docker environment

To reduce effort in preparing the dev environment we use [Github Codespaces](https://github.com/features/codespaces).
However, you can still run the environment on your local machine. Please read this [document](./local-dev-env/README.md) 
on how to do that.