const express = require("express");
const vote = express.Router();
const { voteparty } = require("../../service/Vote/vote");

vote.patch("/", async (req, res) => {
  const { token, partyName } = req.body;
  try {
    await voteparty(token, partyName);
    res.status(200).send(data);
  } catch (error) {}
});

module.exports = vote;
