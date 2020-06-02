const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bookingsRouter = require('./routes/bookings');
const confirmationRouter = require('./routes/confirmation.js');
const facilitiesRouter = require('./routes/facilities');
const db = require('./models');
const SequelizeStore =
  require('connect-session-sequelize')(session.Store);
const db = require('./models');


const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const store = new SequelizeStore({ db: db.sequelize })
app.use(
  session({
    secret: 'secret', // used to sign the cookie
    resave: false, // update session even w/ no changes
    saveUninitialized: true, // always create a session
    store: store,
    cookie: {
      secure: false, // true: only accept https req’s
      maxAge: 6000000, // time in seconds
    },
  }));
store.sync();

app.use(func)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bookings', checkAutorization, bookingsRouter);
app.use('/confirmation', confirmationRouter);
app.use('/facilities', facilitiesRouter);

app.use(express.static(path.join(__dirname, 'public')));

function checkAuth(req, res, next) {
  // if there is user info in the session, continue
  if (req.session.user) {
    next();
    // or if the user is accessing the login page, same
  } else if (req.path == '/login') {
    next();
    // otherwise, redirect to login page
  } else {
    res.redirect('/login');
  }
}

// run checkAuth function first, then route handler
app.get('/', checkAuth, (req, res) => {
  res.render('dashboard.ejs', {
    user: req.session.user,
  });
});


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
