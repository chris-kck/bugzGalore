const express = require("express");
const app = express();
const cors = require("cors");
const uuid = require("uuid");

//Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server Has started on port 5000");
});
