// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const passport   = require('passport')
const session    = require('express-session')

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Static directory
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize()); //initializes passport
app.use(passport.session()); // creates persistent login sessions

// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
require('./routes/auth-routes.js')(app,passport);

//Load Passport Strategies
// =============================================================
require('./config/passport/passport.js')(passport, db.user);

// Starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    // console.log("App listening on PORT " + PORT);
    console.log('App development is using brower-sync, proxied on PORT 3000');
  });
});
