const express = require('express');
const db = require('../models');

const router = express.Router();

/* GET bookings listing. */
router.get('/:id', function(req, res) {
  db.Facilities.findByPk(req.params.id).then(fac => {
    res.render('booking', {
      fac,
    });
  });
});

// Get booking info from booking form
router.post('/:id', function(req, res) {
  const { date, starttime, endtime } = req.body;
  const { id } = req.params;
  // Insert into table
  db.Bookings.create({
    fac_id: id,
    user_id: req.session.user.id,
    starttime: `${date} ${starttime}`,
    endtime: `${date} ${endtime}`,
  })
    .then(booking => {
      res.redirect(`/confirmation/${booking.id}`);
    })
    .catch(err => console.log(err));
});

module.exports = router;
