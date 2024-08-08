const signUp = (req, res, next) => {
  res.json({
    status: 200,
    message: "Success",
  });
};

module.exports = {
  signUp,
};
