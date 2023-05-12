const Bootcamp = require('../models/Bootcamp');
// By using async Function we get rid of doing try and catch constantly
const asyncHandler = require('../middleware/async');

// @desc Get all bootcamps
// @route /api/v1/bootcamps
// @access public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  // Here we have created a query and this query can take averageCost param to filter the bootcamps, exmp: url/averageCost[lte]=1000 will be output as {averageCost: {lte: 1000}}
  let query;
  // We have stringify it to edit the query to be available for find method
  let queryString = JSON.stringify(req.query);
  // But for mongoose there should be money sign in front of the commands so we replace it with regex to edit.
  queryString = queryString.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  // Now we will search desired bootcamp with query in bootcamps. We have parse it because it should be json object not string.
  query = Bootcamp.find(JSON.parse(queryString));

  const bootcamps = await query;
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

// @desc GET bootcamp within a radius
// @route /api/v1/bootcamps/radius/:zipcode/:distance
// @access private
exports.getBootcampInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get lat/lang from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longtitude;

  // Calculate radius using radians
  // Divide dist by radius of Earth
  // Earth radius = 3,963 mi / 6,738 km

  const radius = distance / 3963;

  const bootcamps = await Bootcamp.find({
    location: { $geoWithin: { $centerSphere: [[lat, lng], radius] } },
  });
  res
    .status(200)
    .json({ isSuccess: true, count: bootcamps.length, data: bootcamps });
});
