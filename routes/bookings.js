const express = require('express');

const router = express.Router();

/* GET bookings listing. */
router.get('/booking', function(req, res) {
  res.render('booking');
});

module.exports = router;
