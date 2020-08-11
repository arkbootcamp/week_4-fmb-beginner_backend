const jwt = require("jsonwebtoken");

const formResponse = require("../Forms/formResponse");

const checkToken = (req, res, next) => {
  //   console.log("header", req.header("x-access-token"));
  const bearerToken = req.header("x-access-token");
  if (!bearerToken) {
    res.json({
      msg: "Please Login First",
    });
  }
  try {
    const token = bearerToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.decodedToken = decoded;
    next();
  } catch (e) {
    formResponse.error(res, e);
  }
};

module.exports = checkToken;
