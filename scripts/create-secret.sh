aws secretsmanager \
    create-secret \
    --name ENV_2 \
    --secret-string file://env.json \
    --endpoint-url http://localhost:4566