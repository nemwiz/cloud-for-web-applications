import * as aws from '@pulumi/aws';
import {Bucket} from '@pulumi/aws/s3';
import * as fs from 'fs';

const FIVE_MINUTES = 30 * 10

export const createCloudfrontDistribution = (distributionName: string,
                                             mainAppBucket: Bucket,
                                             adminAppBucket: Bucket = undefined as unknown as Bucket) => {

    const origins = adminAppBucket
        ? createMultipleOrigins(mainAppBucket, adminAppBucket)
        : createSingleOrigin(mainAppBucket);

    const distributionArgs: aws.cloudfront.DistributionArgs = {
        enabled: true,

        origins: origins,

        defaultRootObject: 'index.html',

        // A CloudFront distribution can configure different cache behaviors based on the request path.
        // Here we just specify a single, default cache behavior which is just read-only requests to S3.
        defaultCacheBehavior: {
            targetOriginId: mainAppBucket.arn,
            viewerProtocolPolicy: 'redirect-to-https',
            allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
            cachedMethods: ['GET', 'HEAD', 'OPTIONS'],

            forwardedValues: {
                cookies: {forward: 'none'},
                queryString: false,
            },

            minTtl: 0,
            defaultTtl: FIVE_MINUTES,
            maxTtl: FIVE_MINUTES,
        },

        orderedCacheBehaviors: adminAppBucket ? [
            {
                allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
                cachedMethods: ['GET', 'HEAD', 'OPTIONS'],
                pathPattern: '/admin*',
                targetOriginId: adminAppBucket.arn,
                viewerProtocolPolicy: 'redirect-to-https',
                forwardedValues: {
                    queryString: false,
                    headers: ['Origin'],
                    cookies: {
                        forward: 'none',
                    },
                },
                // functionAssociations: [
                //     {
                //         eventType: 'viewer-request',
                //         functionArn: redirectFunction.arn.apply(arn => arn)
                //     }
                // ]

            }
        ] : [],

        viewerCertificate: {
            cloudfrontDefaultCertificate: true
        },

        // 'All' is the most broad distribution, and also the most expensive.
        // '100' is the least broad, and also the least expensive.
        // See this link for more details https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html
        priceClass: 'PriceClass_200',

        restrictions: {
            geoRestriction: {
                restrictionType: 'none',
            },
        },
    };

    return new aws.cloudfront.Distribution(distributionName, distributionArgs);
}

const createOriginConfig = () => {
    return {
        // Amazon S3 doesn't support HTTPS connections when using an S3 bucket configured as a website endpoint.
        // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginProtocolPolicy
        originProtocolPolicy: 'http-only',
        httpPort: 80,
        httpsPort: 443,
        originSslProtocols: ['TLSv1.2'],
    }
}

const createMultipleOrigins = (mainAppBucket: Bucket, adminAppBucket: Bucket) => {
    return [
        {
            originId: mainAppBucket.arn,
            domainName: mainAppBucket.websiteEndpoint,
            customOriginConfig: createOriginConfig(),
        },
        {
            originId: adminAppBucket.arn,
            domainName: adminAppBucket.websiteEndpoint,
            customOriginConfig: createOriginConfig(),
        },
    ]
};

const createSingleOrigin = (mainAppBucket: Bucket) => {
    return [
        {
            originId: mainAppBucket.arn,
            domainName: mainAppBucket.websiteEndpoint,
            customOriginConfig: createOriginConfig(),
        }
    ]
}

const createCloudfrontFunction = (): aws.cloudfront.Function => {
    return new aws.cloudfront.Function('spa-redirect-function', {
        runtime: 'cloudfront-js-1.0',
        comment: 'Function for redirecting in single page applications',
        publish: true,
        code: fs.readFileSync('./spa-redirect-function.js').toString(),
    });
}