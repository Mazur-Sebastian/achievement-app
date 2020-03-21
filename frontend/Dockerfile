FROM node:alpine

WORKDIR /frontend

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn

COPY . .

CMD ["yarn", "start"]
