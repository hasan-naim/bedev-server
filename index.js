const express = require("express");
const cors = require("cors");

const catagory = require("./data/catagory.json");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/catagories", (req, res) => {
  res.json(catagory);
});

app.listen(port, () => {
  console.log("server is running on", port);
});