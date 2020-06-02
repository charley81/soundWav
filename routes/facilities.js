const express = require('express');

const router = express.Router();

/* GET bookings listing. */
router.get('/bookings/', function(req, res, next) {
  res.render('booking');
});

module.exports = router;
