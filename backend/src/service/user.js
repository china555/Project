const db = require("../db");
async function userLogin(id, password) {
  const sql = `SELECT user_id,role,username,password FROM users WHERE user_id = $1`;
  const { rows } = await db.query(sql, [id]);
  if (rows.length === 0) {
    throw new Error("Login Fail");
  } else if (rows[0].password != password) {
    throw new Error("Password Incorrect");
  }

  return { msg: "Login succcessful", data: rows[0] };
}

function voted() {}
module.exports = {
  userLogin,
  voted,
};
