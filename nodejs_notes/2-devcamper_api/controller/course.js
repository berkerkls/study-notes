const Course = require('../models/Course');
// By using async Function we get rid of doing try and catch constantly
const asyncHandler = require('../middleware/async');

// @desc Get all courses
// @route /api/v1/bootcamps/:bootcampId/courses
// @route /api/v1/courses
// @access public

exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find();
  }

  const courses = await query;

  res.status(200).json({
    isSuccess: true,
    count: courses.length,
    data: courses,
  });
});
