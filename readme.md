### Rails like Node application
By this [tutorial](https://github.com/sixoverground/node-for-rails-lovers) but in Docker :)

- Start services: `sudo docker-compose up -d`
- Jump into container: `sudo docker exec -ti node_like_rails_app_1 bash`
- Run migrations: `knex migrate:latest`
- Go to [localhost:3000/articles](http://localhost:3000/articles)

#### Hints:
Db/init.sql is used by postgres container on create
