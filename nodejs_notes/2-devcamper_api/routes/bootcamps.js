const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // by sendStatus func we can set our status by default but I prefer to use status and json func successively.
  res.status(200).json({ isSuccess: true, msg: 'Show all bootcamps' });
});

//  Below we wrote another get method but from this method we can reach specific bootcamp by sending id and in message we reached that id from request parameters.
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Show bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ isSuccess: true, msg: 'Create a new bootcamp' });
});

//  Below we wrote put method and from this method we can update specific bootcamp by sending id and in message we reached that id from request parameters.
router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ isSuccess: true, msg: `Update bootcamp ${req.params.id}` });
});

module.exports = router;
