const express = require("express");
const login = express.Router();
const { login } = require("../../../service/user");

login.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = login(username, password);
    res.status(200).send(data);
  } catch (error) {
    if (error === "Login Fail") {
      res.status(401).send(error);
    } else if (error === "Password Incorrect") {
      res.status(403).send(error);
    }
  }
});

module.exports = login;
