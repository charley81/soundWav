const express = require('express');
const db = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

/* GET bookings listing. */
router.get('/:id', function (req, res) {
  db.Facilities.findByPk(req.params.id).then(fac => {
    res.render('booking', {
      fac,
    });
  });
});


router.post('/:id', function (req, res) {
  const { date, starttime, endtime } = req.body;
  const { id } = req.params;

  db.Bookings.findAll({
    where: {
      fac_id: id,
      date,
      [Op.or]:[
       { starttime: {
          [Op.between]: [starttime, endtime],
        }},
        { endtime: {
          [Op.between]: [starttime, endtime],
        }}

      ]
      // starttime: {
      //   [Op.between]: [starttime, endtime],
      // },
      //  endtime: {
      //   [Op.between]: [starttime, endtime],
      // },
    },
   
  }).then(results => {
    if (results.length > 0) {
      res.send('Time already booked')


    } else {
       // Insert into table
    db.Bookings.create({
      fac_id: id,
      user_id: req.session.user.id,
      starttime,
      endtime,
      date,
    })


  .then(booking => res.redirect(`/confirmation/${booking.id}`))
     
       
  }}).catch(err => console.log(err));
});

  module.exports = router;
