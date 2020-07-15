const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
const login = require("./routes/Authentication/login/index");
const vote = require("./routes/Vote/index");
const party = require("./routes/Party/index");
dotenv.config();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParse.json());
app.use("/getparty", party);
app.use("/login", login);
app.use("/vote", vote);
app.listen(process.env.PORT, () => {
  console.log(`Port: ${process.env.PORT}`);
});
