const Bootcamp = require('../models/Bootcamp');
// By using async Function we get rid of doing try and catch constantly
const asyncHandler = require('../middleware/async');

// @desc Get all bootcamps
// @route /api/v1/bootcamps
// @access public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ isSuccess: true, msg: 'Show all bootcamps', data: bootcamps });
});

// @desc Get single bootcamp
// @route /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    // return res
    //   .status(400)
    //   .json({ isSuccess: false, msg: "Bootcamp couldn't be found" });
    return next(err);
  }
  res.status(200).json({
    isSuccess: true,
    msg: `Show bootcamp ${req.params.id}`,
    data: bootcamp,
  });
});

// @desc Create new bootcamp
// @route /api/v1/bootcamps
// @access private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  // here we have created async func and when the request.body has sent we returned the body with key data
  const bootcamp = await Bootcamp.create(req.body);
  res
    .status(201)
    .json({ isSuccess: true, msg: 'New bootcamp created', data: bootcamp });
});

// @desc Update bootcamp
// @route /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const updatedBootcamp = await Bootcamp.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedBootcamp) {
    return next(err);
  }
  res.status(200).json({
    isSuccess: true,
    msg: `Updated bootcamp ${req.params.id}`,
    data: updatedBootcamp,
  });
});

// @desc Delete bootcamp
// @route /api/v1/bootcamps/:id
// @access private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(err);
  }
  res
    .status(200)
    .json({ isSuccess: true, msg: `Deleted bootcamp ${req.params.id}` });
});
