// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var axios = require('axios');
// Routes
// =============================================================
module.exports = function(app) {
  app.post("/api/classifieds", function(req, res) {
    var userId = '';
    db.classifieds.create(req.body)
      .then(function(classified) {
        // console.log(classified, "made it here")
        res.json(classified);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.post("/api/messages", function(req, res) {
    var userId = '';
    // console.log(req.body)
    db.message.create(req.body)
      .then(function(message) {
        // console.log(message, "made it here")
        res.json(message);
        // console.log("made it here")
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
    // console.log(req.body);

    db.resource.create(req.body)
      .then(function(resources) {
        res.json(resources);
      })
      .catch(function(err) {
        res.json({ status: "ERROR", message: err })
      })
  });

  app.get('/api/weather', function(req, res) {
    var openWeatherCreds = {
      apiKey: process.env.openWeatherMap,
      zipcode: 27510,
      city: 'Carrboro'
    }
    var queryURLweather = 'https://api.openweathermap.org/data/2.5/weather?zip=' + openWeatherCreds.zipcode + '&q=' + openWeatherCreds.city + '&units=imperial&appid=' + openWeatherCreds.apiKey;

    axios.get(queryURLweather)
      .then(function (resp) {
        res.send(resp.data);
      })
      .catch(function (error) {
        // console.log(error);
      });

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
    var updateLine;
    var pingID = req.params.id;
    if (req.body.name) {
      updateLine = req.body.name;
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


app.put("/api/postdues/:email", function(req, res) {
  var updateLine;
  var pingEmail = req.params.email;
    updateLine = req.body.dues;
    db.user.update({
      dues: updateLine
    }, {
      where: {
        email: pingEmail
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
  })
};
