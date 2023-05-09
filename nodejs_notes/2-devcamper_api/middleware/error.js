const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  //  here we equalized err with a var to use everytime
  let error = { ...err };
  error.message = err.message;

  // Log the console for dev(red is just color so ignore)
  console.log(err.stack.red);

  // We have consoled the error and see the message is the duplicate key and the duplicate key error code 11000 we can see in console and use it in if statement
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // If the type of the error CastError, this if statement enable us to use next(err) in catch in our controller functions
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((item) => item.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    isSuccess: false,
    error: error.message || 'Server error',
  });
};

module.exports = errorHandler;
