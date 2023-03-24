import {createWebsiteBucket} from './s3-buckets';
import {createDockerContainerDeployment} from './containers';
import {createCloudfrontDistribution} from './cloudfront';

const profileName = process.env.AWS_PROFILE;

// CONTAINERS
// export const ebEnvironment = createDockerContainerDeployment('travel-app');

// BUCKETS
// Bucket names should be globally unique
// const webAppBucket = createWebsiteBucket(`${profileName}-bucket`);

// don't change this part
// export const bucketName = webAppBucket.bucket

// CDN
// export const cdn = createCloudfrontDistribution(`${profileName}-cdn`, webAppBucket);
