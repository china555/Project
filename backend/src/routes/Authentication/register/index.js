const register = require("express").Router();
const regis = require("../../../service/Register/index");
register.post("/", async (req, res) => {
  const { username, password } = req.body;
  const data = await regis(username, password);
  res.status(200).send(data);
});

module.exports = register;
