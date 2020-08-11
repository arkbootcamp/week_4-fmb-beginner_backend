const express = require("express");

const middlewareEx = require("../Helpers/Middlewares/example");
const booksController = require("../Controllers/books");

const booksRouter = express.Router();

// booksRouter.use((req, res, next) => {
//   console.log("%s %s %s", req.method, req.url, req.path);
//   console.log(req.path.includes("/search"));
//   next();
// });

//localhost:8000/books/
booksRouter.get("/", middlewareEx, booksController.getAllBooks);
booksRouter.get("/pagination", booksController.getPaginatedBooks);
//localhost:8000/books/
booksRouter.post("/", booksController.postNewBook);

//URL PARAMS & QUERY PARAMS
//localhost:8000/books/search
booksRouter.get("/search/:name", booksController.searchBooks);
booksRouter.get("/search", (req, res) => {
  res.send({
    path: req.route.path,
    params: req.params,
  });
});
//localhost:8000/books/:id
booksRouter.get("/:id", booksController.getBookById);

module.exports = booksRouter;
