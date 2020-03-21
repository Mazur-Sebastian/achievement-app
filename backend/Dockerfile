FROM node:alpine

WORKDIR /backend

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD sh -c 'yarn start:dev'
