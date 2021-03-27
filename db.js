const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log("Connecting to database");
client.connect();
console.log("Connected!");

module.exports = client;
