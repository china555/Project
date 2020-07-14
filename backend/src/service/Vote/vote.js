const db = require("../../db");
const jwt = require("../../jwt");

async function voteparty(token, username) {
  const verify = jwt.verify(token);
  if (verify.isValid) {
    const sqlSetVoted = "UPDATE users SET voted = true;";
    const sqlIncreaseScore = "UPDATE parties SET score = score + 1";
    const sql =
      "INSERT INTO votes(create_at,update_at,party_id,user_id) values (CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);";
  } else if (!verify.isValid) {
  }
}
