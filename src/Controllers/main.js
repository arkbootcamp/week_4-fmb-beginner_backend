const formResponse = require("../Helpers/Forms/formResponse");

const mainController = {
  sayHello: (_, res) => {
    //localhost:8000/
    const error = false;
    if (error) {
      const errorMsg = "Request Invalid";
      formResponse.error(res, errorMsg);
    } else {
      const successMsg = {
        msg: "Hello World",
      };
      formResponse.success(res, successMsg);
    }
  },
  testBody: (req, res) => {
    //localhost:8000/
    res.json({
      msg: "body sudah diterima",
      body: req.body,
    });
  },
};

module.exports = mainController;
