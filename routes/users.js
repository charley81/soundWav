const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('signup.ejs');
});

router.post('/signup', (req, res) => {
  const { first_name, last_name, phone, email, password } = req.body;
  bcrypt.hash(password, 10, (err, superSecretPasswordHash) => {
    db.Users.create({
      first_name,
      last_name,
      phone,
      email,
      password: superSecretPasswordHash,
    }).then(result => {
      res.redirect('/');
    });
  });
});

router.get('/login', function(req, res, next) {
  res.render('login.ejs');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.Users.findOne({ where: { email } })
    .then(Users => {
      bcrypt.compare(password, Users.password, (err, match) => {
        if (match) {
          res.send('Logged in!');
        } else {
          res.send('Incorrect Password');
        }
      });
    })
    .catch(() => {
      res.send('email not found');
    });
});

module.exports = router;
