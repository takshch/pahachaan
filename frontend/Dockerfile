FROM node:lts-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN ls -al && npm install

COPY . .

RUN ls -al

EXPOSE 3000

CMD ls && npm run dev