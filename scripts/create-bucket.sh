BUCKET_NAME=gabriel.alonso-studies

aws \
    s3 mb s3://$BUCKET_NAME \
    --endpoint-url=http://localhost:4566