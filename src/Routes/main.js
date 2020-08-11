const express = require("express");

const mainController = require("../Controllers/main");

const mainRouter = express.Router();

mainRouter.get("/", mainController.sayHello);
mainRouter.post("/", mainController.testBody);
// mainRouter.get(/\/(search)\/(.*)\/(.*)/, ({ params }, res) => {
//   res.json({
//     a: params[0],
//     b: params[1],
//     c: params[2],
//   });
// });
module.exports = mainRouter;
