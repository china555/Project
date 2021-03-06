const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
const dotenv = require("dotenv");
const login = require("./src/routes/Authentication/login/index");
dotenv.config();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParse.json());

app.use("/login");

app.listen(process.env.PORT, () => {
  console.log(`Port ${process.env.PORT}`);
});
