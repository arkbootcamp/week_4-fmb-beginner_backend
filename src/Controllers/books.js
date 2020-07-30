const booksModel = require("../Models/books");
const formResponse = require("../Helpers/Forms/formResponse");

const booksController = {
  getAllBooks: (_, res) => {
    booksModel
      .getAllBooks()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  postNewBook: (req, res) => {
    booksModel
      .postNewBook(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
          id: data.insertId,
          created_at: Date.now(),
          updated_at: Date.now(),
        };
        console.log(responseData);
        formResponse.success(res, responseData);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err);
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
