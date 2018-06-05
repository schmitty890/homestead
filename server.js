// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var dotenv = require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Static directory
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./controller/api-routes.js")(app);
require("./controller/html-routes.js")(app);

// Starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    // console.log("App listening on PORT " + PORT);
    console.log("App development is using brower-sync, proxied on PORT 3000");
  });
});
