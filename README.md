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
- Click the green `Code` button and then the `Codespaces` tab
- Click `Create codespace on main`

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
- For username, please use the following convention **<your-Zuhlke-shortcode>-cloud-workshop** e.g. *neni-cloud-workshop*
- Select both **Provide user access to the AWS Management Console** and **I want to create an IAM user** options
- You can untick the **Users must create a new password at next sign-in** box
- Go to the next page
- Select the **Attach policies directly** box
- Search and select **AdministratorAccess**
- Go to the next page
- We won't be adding any tags so we can skip this one
- Review the details and click the **Create user** button
- **Important**: Download the `.csv` file with credentials and store it. 
You won't be able to access this page anymore
- Click the newly created user and open the **Security credentials** tab
- Scroll to the **Access keys** section and click **Create access key**
- Select **Command line interface (CLI)** and check the recommendation box
- We won't be adding any tags so we can skip this one
- **Important**: Download the `.csv` file with the keys and store it. 
You won't be able to access this page anymore

## Adding AWS profile

You can also look at the video below.

- Open the terminal in your Github codespace
- Run `aws configure --profile <your-zuhlke-shortcode>-cloud-workshop`
- Follow the steps and copy the secret and access key from the `<your-zuhlke-shortcode>-cloud-workshop_accessKeys.csv` file. See above step on creating AWS user
- For region please key in `ap-southeast-1`
- For output name you can skip by pressing `Enter`

![Demo](./create-aws-profile.gif)

## Connecting the repo with your Pulumi account

You can also look at the video below.

- Log in to your Pulumi account
- Click **Settings** and select **Personal access Tokens** in the top right menu
- Create a new token and store the token somewhere
- Open the terminal
- Run `npm install`
- Run `pulumi login` and pass the token that we just created
- Run `pulumi stack` and select **create new stack**
- Name your stack `dev`
- Configure Pulumi to use your AWS profile by running and adapting the below command
    - `echo export AWS_PROFILE=<your-zuhlke-shortcode>-cloud-workshop >> ~/.bashrc`
    - `source ~/.bashrc`

![Demo](./create-pulumi-access.gif)

## Deploying the infrastructure 

Our infrastructure is located in `index.ts`. To deploy it we need to run `pulumi up --stack dev` command.

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

## Cleaning up resources

- Run `chmod +x empty-s3-buckets.sh` 
- Run `./empty-s3-buckets.sh`
- Run `pulumi destroy`
- Run `pulumi stack rm dev`
- Remove Beanstalk bucket manually
- Delete your Github codespace
- Delete your Pulumi account
- Log in as a root user to AWS and [close the AWS account](https://repost.aws/knowledge-center/close-aws-account)