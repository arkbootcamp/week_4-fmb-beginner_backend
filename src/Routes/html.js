const express = require("express");

const htmlController = require("../Controllers/html");

const htmlRouter = express.Router();

htmlRouter.get("/", htmlController.sendHTML);

module.exports = htmlRouter;
