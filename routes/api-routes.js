// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  app.post("/api/classifieds", function (req, res) {
    var userId = '';
    db.classifieds.create(req.body)
    .then(function (classified) {
        res.json(classified);
    })
    .catch(function (err) {
      res.json({status: "ERROR", message: err})
    })
  });
};

