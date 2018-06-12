// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  app.post("/api/classifieds", function(req, res) {
    var userId = '';
    db.classifieds.create(req.body)
      .then(function(classified) {
        res.json(classified);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.post("/api/events", function(req, res) {
    var userId = '';
    db.event.create(req.body)
      .then(function(events) {
        res.json(events);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.post("/api/resources", function(req, res) {
    var userId = '';
    db.resource.create(req.body)
      .then(function(resources) {
        res.json(resources);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.get("/api/events", function(req, res) {
    db.event.findAll({
      order: [
        ['date', 'ASC']
      ]
    }).then( function(eventData) {
      res.json(eventData);
    })
  })

  app.put("/api/users/:id", function(req, res) {
    console.log(req.body)
    var updateLine;
    var pingID = req.params.id;
    if (req.body.name) {
      updateLine = req.body.name;
      console.log(req.body)
      db.user.update({
        username: updateLine
      }, {
        where: {
          id: pingID
        }
      }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      })
    }
    if (req.body.email) {
      updateLine = req.body.email;
      db.user.update({
        email: updateLine
      }, {
        where: {
          id: pingID
        }
      }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      })
    }
    if (req.body.about) {
      updateLine = req.body.about;
      db.user.update({
        about: updateLine
      }, {
        where: {
          id: pingID
        }
      }).then(function() {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      })
      .catch(function(err) {
        res.json({status: "ERROR", message: err})
      })
    }
  })
};

