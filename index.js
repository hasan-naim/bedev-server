const express = require("express");
const cors = require("cors");

const catagory = require("./data/catagory.json");
const courses = require("./data/card.json");
const details = require("./data/details.json");

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/catagories", (req, res) => {
  res.json(catagory);
});
app.get("/courses", (req, res) => {
  res.json(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(details);
  const respon = details.find((obj) => obj.id == id);
  res.json(respon);
});

app.listen(port, () => {
  console.log("server is running on", port);
});
