const formStandard = {
  responseAPI: (res, data, msg, status) => {
    res.json({
      status,
      msg,
      data,
    });
  },
  success: (res, data) => {
    res.json(data);
  },
};

module.exports = formStandard;
