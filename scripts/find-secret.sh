aws secretsmanager \
    list-secrets \
    --filter Key="name",Values="ENV_1" \
    --endpoint-url http://localhost:4566
