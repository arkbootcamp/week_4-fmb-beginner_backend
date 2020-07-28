const mainController = {
  sayHello: (_, res) => {
    //localhost:8000/
    res.json({
      msg: "Hello World",
    });
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
