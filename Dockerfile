FROM node:8.12.0-alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN yarn install
CMD yarn start