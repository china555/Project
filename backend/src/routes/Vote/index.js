const express = require("express");
const vote = express.Router();
const dbConnection = require("../../../db");

vote.patch("/", (req, res) => {
  res.send("Hello World");
});
