const errorHandler = (err, req, res, next) => {
  // Log the console for dev(red is just color so ignore)
  console.log(err.stack.red);

  res.status(500).json({
    isSuccess: false,
    error: err.message,
  });
};

module.exports = errorHandler;
