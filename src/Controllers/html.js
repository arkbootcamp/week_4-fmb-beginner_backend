const path = require("path");

const htmlController = {
  sendHTML: (_, res) => {
    //localhost:8000/html
    // res.send(__dirname);
    res.sendFile(path.join("D:\\backend-testing\\library-api\\home.html"));
  },
};

module.exports = htmlController;
