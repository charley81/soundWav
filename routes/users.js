const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('signup.ejs');
});

module.exports = router;
