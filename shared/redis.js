require('dotenv').config();
const Ioredis = require("ioredis");

console.log("REDIS_HOST =", process.env.REDIS_HOST); 
const redisConnection = new Ioredis(process.env.REDIS_HOST, {
  password:process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
});

module.exports = redisConnection;
