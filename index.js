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

// get a specific market
app.get("/market/:market_slug", async (req, res) => {
  try {
    const { market_slug } = req.params;
    const market = await client.query(
      "SELECT * from current_markets WHERE slug = $1",
      [market_slug]
    );
    res.json(market.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// add market to table
app.post("/new_market", async (req, res) => {
  try {
    market_id = uuid.v4(); // create the new market id
    const {
      market_name,
      stalls,
      stalls_available,
      location,
      market_owner,
      details,
      start_time,
      end_time,
      market_duration,
    } = req.body;
    const slug = slugify(market_name, { replacement: "_", lower: true });

    const newMarket = await client.query(
      'INSERT INTO public.current_markets (market_id, market_name, stalls, stalls_available, market_owner_id, "location", market_duration, details, start_time, end_time, slug) VALUES($1, $2, $3, $4, $5, $6, $7::daterange, $8, $9, $10, $11)',
      [
        market_id,
        market_name,
        stalls,
        stalls_available,
        market_owner,
        location,
        market_duration,
        details,
        start_time,
        end_time,
        slug,
      ]
    );

    res.json(newMarket.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
