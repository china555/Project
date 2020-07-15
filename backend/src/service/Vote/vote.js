const db = require("../../db");
const jwt = require("../../jwt");

async function voteparty(token, partyName) {
  const verify = jwt.verify(token);
  if (verify.isValid) {
    const getId = `SELECT u.user_id ,p.party_id FROM users As u, parties As p Where u.username = $1 AND p.name = $2`;
    const sqlSetVoted = `UPDATE users SET voted = $1 WHERE username = $2`;
    const sqlIncreaseScore =
      "UPDATE parties SET score = score + 1 WHERE name = $1";
    const sql =
      "INSERT INTO votes(create_at,update_at,party_id,user_id) values (CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,$1,$2);";

    await db.query(sqlSetVoted, [true, verify.userInfo.payload.username]);
    await db.query(sqlIncreaseScore, [partyName]);
    let { rows } = await db.query(getId, [
      verify.userInfo.payload.username,
      partyName,
    ]);
    await db.query(sql, [rows[0].party_id, rows[0].user_id]);
  } else if (!verify.isValid) {
    throw new Error("Something Went Wrong");
  }
}

module.exports = {
  voteparty,
};
