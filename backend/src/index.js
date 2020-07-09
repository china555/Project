const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParse = require("body-parser");
const dotenv = require("dotenv");
app.use(
  express.urlencoded({
    extended: true,
  })
);
dotenv.config();
app.use(cors());
app.use(bodyParse.json());

app.listen(process.env.PORT, () => {
  console.log(`Port ${process.env.PORT}`);
});
