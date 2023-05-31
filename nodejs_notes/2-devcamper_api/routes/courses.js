const express = require('express');
const router = express.Router();

// we need to reach our exported functions in controller file so
const { getCourses } = require('../controller/course');

router.route('/').get(getCourses);

module.exports = router;
