FROM node:15-alpine3.13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .