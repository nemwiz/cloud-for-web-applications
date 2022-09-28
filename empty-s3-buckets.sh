for bucket in $(aws s3 ls | awk '{print $3}')
do
  aws s3 rm s3://$bucket --recursive
done