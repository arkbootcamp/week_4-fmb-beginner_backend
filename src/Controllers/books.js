const _ = require("underscore");

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
  searchBooks: ({ route, params }, res) => {
    console.log("search");
    const isParamsEmpty = _.isEmpty(params);
    const path = route.path;
    const data = {
      path,
      isParamsEmpty,
      params,
    };
    res.send(data);
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
  getPaginatedBooks: (req, res) => {
    const { page, limit } = req.query;
    booksModel
      .getPaginatedBooks(page, limit)
      .then((data) => {
        formResponse.pagination(req, res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = booksController;
