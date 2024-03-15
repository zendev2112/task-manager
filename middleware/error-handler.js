const errorHandlerMiddleware = (err, req, res, next) =>
  res.status(500).json({ msg: `Something went wrong, try later` });

module.exports = errorHandlerMiddleware;
