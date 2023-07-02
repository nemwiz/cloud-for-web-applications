import {Bucket} from '@pulumi/aws/s3';

import * as aws from '@pulumi/aws';

const createBucket = (bucketName: string) => {
    return new aws.s3.Bucket(bucketName, {
        website: {
            indexDocument: 'index.html'
        }
    });
}

const createPublicReadBucketPolicy = (policyName: string, s3Bucket: Bucket) => {

    // Create an S3 Bucket Policy to allow public read of all objects in bucket
    const publicReadPolicyForBucket = (bucketName: string) => {
        return JSON.stringify({
            Version: '2012-10-17',
            Statement: [{
                Effect: 'Allow',
                Principal: '*',
                Action: [
                    's3:GetObject'
                ],
                Resource: [
                    `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
                ]
            }]
        })
    }

    return new aws.s3.BucketPolicy(policyName, {
        bucket: s3Bucket.bucket, // depends on siteBucket -- see explanation below
        policy: s3Bucket.bucket.apply(publicReadPolicyForBucket)
    })
};

export const createWebsiteBucket = (bucketName: string): Bucket => {
    const bucket = createBucket(`${bucketName}`);
    // Set the access policy for the bucket so all objects are readable
    new aws.s3.BucketPublicAccessBlock(`${bucketName}-public-access-block`, {
        bucket: bucket.id,
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
    });
    createPublicReadBucketPolicy(`${bucketName}-bucket-policy`, bucket);

    return bucket;
}





