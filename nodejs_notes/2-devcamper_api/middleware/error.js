const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  //  here we equalized err with a var to use everytime
  let error = { ...err };
  error.message = err.message;

  // Log the console for dev(red is just color so ignore)
  console.log(err.stack.red);

  // If the type of the error CastError, this if statement enable us to use next(err) in catch in our controller functions
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    isSuccess: false,
    error: error.message || 'Server error',
  });
};

module.exports = errorHandler;
