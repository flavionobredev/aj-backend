FROM node:17.9.0-alpine3.15

WORKDIR /usr/aj-backend/app

RUN apk add --no-cache -q bash

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3030