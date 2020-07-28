const db = require("../Configs/dbMySql");

const booksModel = {
  getAllBooks: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT books.id AS book_id, books.title AS book_title, books.author AS book_author, genres.genre AS book_genre, books.created_at, books.updated_at FROM books JOIN genres ON books.genre_id = genres.id";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postNewBook: (body) => {
    const { title, author, genre_id } = body;
    const queryString = "INSERT INTO books SET title=?, author=?, genre_id=?";
    //   const queryString = "INSERT INTO books SET ?";
    return new Promise((resolve, reject) => {
      // db.query(queryString, (err, data) => {
      //   if (!err) {
      //     resolve(data);
      //   } else {
      //     reject(err);
      //   }
      // });
      db.query(queryString, [title, author, genre_id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getBookById: (id) => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT books.id AS book_id, books.title AS book_title, books.author AS book_author, genres.genre AS book_genre, books.created_at, books.updated_at FROM books JOIN genres ON books.genre_id = genres.id WHERE books.id = ?";
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = booksModel;
