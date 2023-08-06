const express = require("express");
require("dotenv").config();

const app = express();

const secret = process.env.SECRET;

app.get("/", (req, res) => {
  res.send(`Hello Docker - ${secret}`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`express running on port ${PORT}`);
});
