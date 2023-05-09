// This async function return a function with parameter as you see. and promise resolve with this function again.
const asyncHandler = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

module.exports = asyncHandler;
