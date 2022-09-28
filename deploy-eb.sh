APP_DIR=src/web-app

cd $APP_DIR

if [ ! -d "node_modules" ]; then
  npm install
fi

npm run build

zip web-app.zip build/* build/**/**/*.* Dockerfile Dockerrun.aws.json nginx.conf
mv web-app.zip ../..

cd ../..