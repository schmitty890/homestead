// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');
const seeds = require('./db/seeds.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Static directory
app.use(express.static('public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    upperCase: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    momentFromNowTime: function (time) {
      return moment(time).fromNow();
    },
    formatDateForEvents: function (time) {
      return moment(time).format("ddd, MMM Do")
    },
    imagePath: function(category) {
      return "/assets/images/event-categories/" + category.toLowerCase() + ".jpg";
    }
  }
}));
app.set('view engine', 'handlebars');

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize()); //initializes passport
app.use(passport.session()); // creates persistent login sessions

// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
require('./routes/auth-routes.js')(app, passport);

//Load Passport Strategies
// =============================================================
require('./config/passport/passport.js')(passport, db.user);


app.get('*', function(req, res) {
  res.render('404');
});

// Starting our Express app
// =============================================================

// Always keep one of the "db.sequelize" lines commented out.
db.sequelize.sync().then(function() {
// reset your seeds

 // db.sequelize.sync({ force: true }).then(function () {
   // seeds(); // populates with seed data

  app.listen(PORT, function () {
    // console.log("App listening on PORT " + PORT);
    console.log('App development is using brower-sync, proxied on http://localhost:3000');
  });
});
