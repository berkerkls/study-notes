// @desc Get all bootcamps
// @route /api/v1/bootcamps
// @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ isSuccess: true, msg: 'Show all bootcamps' });
};

// @desc Get single bootcamp
// @route /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc Create new bootcamp
// @route /api/v1/bootcamps
// @access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ isSuccess: true, msg: 'Create a new bootcamp' });
};

// @desc Update bootcamp
// @route /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc Delete bootcamp
// @route /api/v1/bootcamps/:id
// @access private
exports.deletBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Delete bootcamp ${req.params.id}` });
};
