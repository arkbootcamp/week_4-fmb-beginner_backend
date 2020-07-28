const booksModel = require("../Models/books");

const booksController = {
  getAllBooks: (_, res) => {
    booksModel
      .getAllBooks()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  postNewBook: (req, res) => {
    booksModel
      .postNewBook(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  searchBooks: (req, res) => {
    res.status(200).send(req.query);
  },
  getBookById: (req, res) => {
    booksModel
      .getBookById(req.params.id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = booksController;
