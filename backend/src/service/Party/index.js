const db = require("../../db");
const jwt = require("../../jwt");

async function getparty() {
  const sql = "Select name, score from parties";
  const { rows } = await db.query(sql);
  if (rows.length === 0) {
    throw new Error("Sorry don't have any party to select");
  }
  console.log("12323");
  return rows;
}

module.exports = getparty;
