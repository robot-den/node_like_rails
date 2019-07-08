FROM node:12.6.0-stretch

WORKDIR /app

RUN npm install knex -g

COPY . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
