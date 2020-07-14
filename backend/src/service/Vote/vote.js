const db = require("../../db");
const jwt = require("../../jwt");

async function voteparty(token, username) {
  const verify = jwt.verify(token);
  if (verify.isValid) {
    const sqlSetVoted = "UPDATE users SET voted = false;";
    const sqlIncreaseScore = "UPDATE parties SET score = score + 1";
  } else if (!verify.isValid) {
  }
}
