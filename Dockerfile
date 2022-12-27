FROM node:10.15.2-alpine

ENV PORT=3000

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

EXPOSE 3000

CMD npm start