const express = require('express');
const router = express.Router();

// we need to reach our exported functions in controller file so
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampInRadius,
} = require('../controller/bootcamp');

// add other course router in same file
const courseRouter = require('./courses');

// Reinitialize the router into other resource
router.use('/:bootcampId/courses', courseRouter);

// in route function we give url and because getBootcamps and createBootcamp functions do not need id in our controller file we used / url
router.route('/').get(getBootcamps).post(createBootcamp);

// in this endpoint we need zipcode and distance as parameter so we need to create new route
router.route('/radius/:zipcode/:distance').get(getBootcampInRadius);

// but here in get by id update and delete func we need id so we used different url
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
