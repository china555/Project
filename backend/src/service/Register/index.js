const db = require("../../db");
const jwt = require("../../jwt");

async function register(username, password) {
  const sql = `INSERT INTO users(username,password) VALUES($1,$2)`;
  try {
    await db.query(sql, [username, password]);
  } catch (error) {
    console.log(error);
  }
  return { msg: "register successful" };
}

module.exports = register;
