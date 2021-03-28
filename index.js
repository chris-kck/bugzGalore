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

// get list of all the products
app.get("/products", async (req, res) => {
  try {
    const allMarkets = await client.query("SELECT * FROM products");
    res.json(allMarkets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get list of all the markets
app.get("/markets", async (req, res) => {
  try {
    console.log(`${req.ip} has requested all the markets`);
    const allMarkets = await client.query("SELECT * FROM markets");
    res.json(allMarkets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get list of all the markets
app.get("/vendors", async (req, res) => {
  try {
    console.log(`${req.ip} has requested all the vendors`);
    const allMarkets = await client.query("SELECT * FROM market_vendors");
    res.json(allMarkets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get specific product
app.get("/product/:productid", async (req, res) => {
  try {
    const { productid } = req.params;
    const allMarkets = await client.query(
      "SELECT * FROM products WHERE productid=$1",
      [productid]
    );
    res.json(allMarkets.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get a specific market
app.get("/market/:market_slug", async (req, res) => {
  try {
    const { market_slug } = req.params;
    const market = await client.query("SELECT * from markets WHERE slug = $1", [
      market_slug,
    ]);
    res.json(market.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get a specific market
app.get("/vendor/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const vendor = await client.query(
      "SELECT * from market_vendors WHERE username = $1",
      [username]
    );
    res.json(vendor.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// add vendor to table
app.post("/new_vendor", async (req, res) => {
  try {
    vendor_id = uuid.v4(); // create the new market id
    const { username, email, firstname, surname, bio, profileimage } = req.body;
    // TODO: Double check if username exists

    const newVendor = await client.query(
      "INSERT INTO market_vendors (vendorid, username, email, profileimage, firstname, surname, bio) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [vendor_id, username, email, profileimage, firstname, surname, bio]
    );
    console.log("Added a new vendor: " + firstname + " " + surname);
    res.json(newVendor.rows);
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
      market_location,
      market_owner,
      details,
      start_time,
      end_time,
      market_duration,
    } = req.body;
    const slug = slugify(market_name, { replacement: "_", lower: true });

    const newMarket = await client.query(
      "INSERT INTO markets (market_id, market_name, stalls, stalls_available, market_owner_id, market_location, market_duration, details, start_time, end_time, slug, active) VALUES($1, $2, $3, $4, $5, $6, $7::daterange, $8, $9, $10, $11,$12)",
      [
        market_id,
        market_name,
        stalls,
        stalls_available,
        market_owner,
        market_location,
        market_duration,
        details,
        start_time,
        end_time,
        slug,
        true, // Active becuase you can not add a past market
      ]
    );

    console.log("Added market " + market_name);
    res.json(newMarket.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// add product to table
app.post("/new_product", async (req, res) => {
  try {
    productid = uuid.v4(); // create the new market id
    const { productname, productowner, image, productdescription } = req.body;
    // TODO: Double check if username exists

    const newVendor = await client.query(
      "INSERT INTO products (productid, productname, productowner, image, productdescription) VALUES ($1, $2, $3, $4, $5)",
      [productid, productname, productowner, image, productdescription]
    );
    console.log("Added a new product: " + productname);
    res.json(newVendor.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server has started on port " + process.env.PORT);
});
