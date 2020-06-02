const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:id', function(req, res) {
  db.Bookings.findByPk(req.params.id).then(booking => {
    res.render('confirmation', {
      booking,
    });
  });
});

module.exports = router;
