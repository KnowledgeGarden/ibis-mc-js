/* @author park */
const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const flash = require("connect-flash");
const session = require("express-session");

//environment
//const environment = new require('./apps/environment')();

const app = express();
const hbs = require('hbs');

const viewPath = path.join(process.cwd(), "views");
app.set("view engine", "hbs");
app.set("views", viewPath); //path.join(__dirname, "/views"));
hbs.registerPartials(__dirname + '/views/partials');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(cookieParser()); // collides with session
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());

app.use(session({
  genid: function(req) {
    return uuid.v4(); // use UUIDs for session IDs
  },
  secret: "collaborative sauce", //TODO ChangeMe
  resave: true,
  saveUninitialized: true
}));

//routes

const Indx = require('./routes/index');
const Quests = require('./routes/quests');
const Usersx = require('./routes/users');
const NodeEd = require('./routes/node_editor');
const Qst = require('./routes/quest');
const NewQ = require('./routes/new_quest');

//console.info('QR', NodeEd);

app.use('/quests', Quests);
app.use('/users', Usersx);
app.use('/nodeed', NodeEd);
app.use('/newquest', NewQ);
app.use('/quest', Qst);
// Index has to be last
app.use('/', Indx);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  data = {};
  data.error = err;
  res.render('error', data);
});

module.exports = app;
