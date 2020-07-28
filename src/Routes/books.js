const express = require("express");

const middlewareEx = require("../Helpers/Middlewares/example");
const booksController = require("../Controllers/books");

const booksRouter = express.Router();

//localhost:8000/books/
booksRouter.get("/", middlewareEx, booksController.getAllBooks);
//localhost:8000/books/
booksRouter.post("/", booksController.postNewBook);

//URL PARAMS & QUERY PARAMS
//localhost:8000/books/search
booksRouter.get("/search", booksController.searchBooks);
//localhost:8000/books/:id
booksRouter.get("/:id", booksController.getBookById);

module.exports = booksRouter;
