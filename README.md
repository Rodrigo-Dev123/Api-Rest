# POC Api Rest

## Modo de Uso 

1. Adicionar um arquivo `.env` no diretorio root com as configurações:
    ```text
    API_PORT=<port>
    DATABASE=<db-name>
    DATABASE_USERNAME=<db-username>
    DATABASE_PASSWORD=<db-pass>
    TOKEN_SECRET=<secret>
    TOKEN_EXPIRATION=<time>
    ```
2. Para iniciar o projeto `run`: `docker compose up`
3. Para inicializar a database `run`: `docker exec api npx sequelize db:migrate` 