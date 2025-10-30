FROM node:20

WORKDIR /app/worker

COPY Queue-worker/package*.json ./

RUN npm install

COPY Queue-worker .
COPY shared ./shared

CMD [ "node","worker.js" ]