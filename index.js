const express = require("express");
const app = express();
const cors = require("cors");
const uuid = require("uuid");
const slugify = require("slugify");
const client = require("./db");
const dotenv = require("dotenv");

// config
dotenv.config();

//Middleware
app.use(cors());
app.use(express.json());

// routes

// get list of all the markets
app.get("/markets", async (req, res) => {
  try {
    const allMarkets = await client.query("SELECT * FROM current_markets");
    res.json(allMarkets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// add market to table
app.post("/new_market", async (req, res) => {
  try {
    const { description } = req.body;

    const newMarket = await client.query("");

    res.json(newMarket.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
