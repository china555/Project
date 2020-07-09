const express = require("express");
const login = express.Router();
const dbConnection = require("../../../db");
login.post("/", async (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT Role,username FROM users WHERE username = ? AND password = ?`;
  try {
    const [data] = await dbConnection.execute(sql, [username, password]);
  } catch (error) {
    console.log(error.message);
  }
  if (data.length === 0) {
    res.status(404).send({
      message: "Login Fail",
    });
  }
  res.send({
    message: "Login Successful",
  });
});
