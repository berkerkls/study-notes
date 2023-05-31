const express = require('express');
const router = express.Router({ mergeParams: true });

// we need to reach our exported functions in controller file so
const { getCourses } = require('../controller/course');

router.route('/').get(getCourses);

module.exports = router;
