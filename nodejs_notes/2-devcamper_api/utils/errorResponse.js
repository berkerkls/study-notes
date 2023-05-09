class ErrorResponse extends Error {
  // here we have a class that we can send message and statusCode as prop inside by creating new ErrorResponse()
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
