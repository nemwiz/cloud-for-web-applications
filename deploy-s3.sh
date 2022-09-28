APP_DIR=src/web-app

cd $APP_DIR

if [ ! -d "node_modules" ]; then
  npm install
fi

npm run build
cd ../..

BUCKET_NAME=$(pulumi stack --stack dev output --json | jq '.bucketName' -j)
echo $BUCKET_NAME
aws s3 cp $APP_DIR/build/ s3://$BUCKET_NAME/ --recursive
