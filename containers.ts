import * as aws from '@pulumi/aws';

export const createDockerContainerDeployment = (appName: string) => {

    const appEnvironment = 'dev';

    const instanceProfileRole = new aws.iam.Role(`${appName}-eb-ec2-role`, {
        name: `${appName}-eb-ec2-role`,
        description: "Role for EC2 managed by EB",
        assumeRolePolicy: JSON.stringify({
            Version: "2012-10-17",
            Statement: [
                {
                    Action: "sts:AssumeRole",
                    Principal: {
                        Service: "ec2.amazonaws.com"
                    },
                    Effect: "Allow",
                    Sid: ""
                }
            ]
        })
    });

    new aws.iam.RolePolicyAttachment(
        `${appName}-role-policy-attachment-ec2-ecr`,
        {
            role: instanceProfileRole.name,
            policyArn: "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
        }
    );

    new aws.iam.RolePolicyAttachment(
        `${appName}-role-policy-attachment-web`,
        {
            role: instanceProfileRole.name,
            policyArn: "arn:aws:iam::aws:policy/AWSElasticBeanstalkWebTier"
        }
    );

    new aws.iam.RolePolicyAttachment(
        `${appName}-role-policy-attachment-worker`,
        {
            role: instanceProfileRole.name,
            policyArn: "arn:aws:iam::aws:policy/AWSElasticBeanstalkWorkerTier"
        }
    );

    const instanceProfile = new aws.iam.InstanceProfile(
        `${appName}-eb-ec2-instance-profile`,
        {
            role: instanceProfileRole.name
        }
    );

    const serviceRole = new aws.iam.Role(
        `${appName}-elasticbeanstalk-service-role`,
        {
            name: `${appName}-elasticbeanstalk-service-role`,
            description: "Role trusted by Elastic Beanstalk",
            assumeRolePolicy: JSON.stringify({
                Version: "2012-10-17",
                Statement: [
                    {
                        Action: "sts:AssumeRole",
                        Condition: {
                            StringEquals: {
                                "sts:ExternalId": "elasticbeanstalk"
                            }
                        },
                        Principal: {
                            Service: "elasticbeanstalk.amazonaws.com"
                        },
                        Effect: "Allow",
                        Sid: ""
                    }
                ]
            })
        }
    );

    new aws.iam.RolePolicyAttachment(
        `${appName}-role-policy-attachment-eb-enhanced-health`,
        {
            role: serviceRole.name,
            policyArn:
                "arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkEnhancedHealth"
        }
    );

    new aws.iam.RolePolicyAttachment(
        `${appName}-role-policy-attachment-eb-service`,
        {
            role: serviceRole.name,
            policyArn: "arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkService"
        }
    );

    const app = new aws.elasticbeanstalk.Application(`${appName}-service`, {
        name: `${appName}-service`,
        description: "",
        tags: {}
    });

    return new aws.elasticbeanstalk.Environment(
        `${appEnvironment}-${appName}`,
        {
            name: `${appEnvironment}-${appName}`, // A unique name for this environment. This name is used in the application URL
            application: app.name,
            solutionStackName:
                "64bit Amazon Linux 2 v3.5.5 running Docker",
            settings: [
                // "Modify Security" in the console
                {
                    name: "ServiceRole",
                    namespace: "aws:elasticbeanstalk:environment",
                    value: serviceRole.name
                },
                {
                    name: "IamInstanceProfile",
                    namespace: "aws:autoscaling:launchconfiguration",
                    value: instanceProfile.name
                },
                {
                    name: "InstanceType",
                    namespace: "aws:autoscaling:launchconfiguration",
                    value: 't2.micro'
                },
                // Modify Monitoring
                {
                    name: "SystemType",
                    namespace: "aws:elasticbeanstalk:healthreporting:system",
                    value: "enhanced" // Default - "basic"
                }
            ]
        }
    );
}


