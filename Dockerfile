FROM node:18-alpine3.15

RUN npm install -g npm@8.12.2

WORKDIR /usr/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]
