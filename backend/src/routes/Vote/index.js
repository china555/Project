const express = require("express");
const vote = express.Router();

vote.patch("/", async (req, res) => {
  const { token, username } = req.body;
  try {
    const data = await voteparty(token, username);
    res.status(200).send(data);
  } catch (error) {}
});

module.exports = vote;
