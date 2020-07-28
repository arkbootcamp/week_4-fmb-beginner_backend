//PACKAGE IMPORT
const express = require("express");
//FILEPATH IMPORT
const mainRouter = require("./main");
const booksRouter = require("./books");
const htmlRouter = require("./html");
//DEKLARASI
const indexRouter = express.Router();
//IMPLEMENTASI
indexRouter.use("/", mainRouter);
indexRouter.use("/books", booksRouter);
indexRouter.use("/html", htmlRouter);
//EXPORT
module.exports = indexRouter;
