const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

// @desc Get all bootcamps
// @route /api/v1/bootcamps
// @access public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ isSuccess: true, msg: 'Show all bootcamps', data: bootcamps });
  } catch (err) {
    next(err);
  }
};

// @desc Get single bootcamp
// @route /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    // res.status(400).json({ isSuccess: false, msg: err.message });
    next(err);
  }
};

// @desc Create new bootcamp
// @route /api/v1/bootcamps
// @access private
exports.createBootcamp = async (req, res, next) => {
  try {
    // here we have created async func and when the request.body has sent we returned the body with key data
    const bootcamp = await Bootcamp.create(req.body);
    res
      .status(201)
      .json({ isSuccess: true, msg: 'New bootcamp created', data: bootcamp });
  } catch (err) {
    res.status(400).json({
      isSuccess: false,
      msg: err.message,
    });
  }
};

// @desc Update bootcamp
// @route /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

// @desc Delete bootcamp
// @route /api/v1/bootcamps/:id
// @access private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return next(err);
    }
    res
      .status(200)
      .json({ isSuccess: true, msg: `Deleted bootcamp ${req.params.id}` });
  } catch (error) {
    next(err);
  }
};
