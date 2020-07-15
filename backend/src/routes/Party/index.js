const party = require("express").Router();
const getparty = require("../../service/Party/index");

party.get("/", async (req, res) => {
  try {
    const data = await getparty();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    if (String(error) === "Error: Sorry don't have any party to select") {
      res.send(301).send({
        msg: "Sorry don't have any party to select plese try again later",
      });
    }
  }
});
module.exports = party;
