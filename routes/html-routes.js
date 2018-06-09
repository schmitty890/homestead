// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var db = require("../models");
let classifieds = require('../data/hp-classifieds.json');
let faqs = require('../data/faq.json');

module.exports = function(app) {

  // Home Page
  app.get('/', function(req, res) {

    let hbsObject = {
      classifieds: classifieds
    }

    db.event.findAll({
      limit: 6,
      order: [
        ['date', 'ASC']
      ]
    }).then(function(eventInfo) {
      hbsObject.eventInfo = eventInfo;
      // console.log(hbsObject);
      res.render('index', { hbsObject: hbsObject });
    });

  });

  app.get('/community', function(req, res) {
    res.render('community');
  });

  app.get('/events', function(req, res) {
    res.render('events');
  });

  app.get('/classes', function(req, res) {
    res.render('community');
  });

  app.get('/meetups', function(req, res) {
    res.render('meetups');
  });

  app.get('/faq', function(req, res) {
    let hbsObject = {
      faqs: faqs
    }
    console.log(hbsObject);
    res.render('faq', { hbsObject: hbsObject });
  });

  app.get('/classifieds', function(req, res) {
    res.render('classifieds');
  });

  app.get('/resources/:type?', function(req, res) {
    let type = req.params.type.replace('+',' ');

    db.resource.findAll({
      where: {
        // author_id: ?, // pass in
        category: type
      },
      limit: 20,
      order: [
        ['createdAt']
      ]
    }).then(function(data) {
      let hbsObject = {
        resource: data
      }

      console.log(JSON.stringify(hbsObject));

      res.render('resources', hbsObject);
    });

  })

  //planning to use param instead of these routes
  //see above
  //leaving this commented out for now, only in case of objections

  // app.get('/skillsoffered', function(req, res) {
  //   res.render('skillsoffered');
  // });

  // app.get('/skillsneeded', function(req, res) {
  //   res.render('skillsneeded');
  // });

  // app.get('/itemsoffered', function(req, res) {
  //   res.render('itemsoffered');
  // });

  // app.get('/itemsneeded', function(req, res) {
  //   res.render('itemsneeded');
  // });
};

