//PACKAGE IMPORT
const express = require("express");
//FILEPATH IMPORT
const mainRouter = require("./main");
const booksRouter = require("./books");
const htmlRouter = require("./html");
const authRouter = require("./auth");
const uploadRouter = require("./upload");

const checkToken = require("../Helpers/Middlewares/checkToken");
//DEKLARASI
const indexRouter = express.Router();
//IMPLEMENTASI
//PRIVATE ROUTE
indexRouter.use("/books", checkToken, booksRouter);
indexRouter.use("/upload", checkToken, uploadRouter);
//PUBLIC ROUTE
indexRouter.use("/", mainRouter);
indexRouter.use("/html", htmlRouter);
indexRouter.use("/auth", authRouter);
//EXPORT
module.exports = indexRouter;
