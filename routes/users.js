const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('signup.ejs');
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, superSecretPasswordHash) => {
      db.Users.create({
          email,
          password: superSecretPasswordHash,
      }).then((result) => {
          res.redirect('/');
      });
  });
});

router.get('/login', function (req, res, next) {
  res.render('signup.ejs');
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
              };
          });
      })
      .catch(() => {
          res.send('email not found');
      });
});


module.exports = router;
