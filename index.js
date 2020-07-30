require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const indexRouter = require("./src/Routes/index");

const app = express();

// const port = 8000;
app.listen(process.env.PORT, () => {
  console.log(`Server is Running at ${process.env.PORT}`);
  console.log(process.env.HOST);
});
app.use(bodyParser.json()); //json
app.use(bodyParser.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(logger("dev")); //penggunaan morgan

app.use(indexRouter);
