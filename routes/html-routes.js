// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// var db = require("../models");

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index', {title: 'homestead'});
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
    res.render('faq');
  });

  app.get('/classifieds', function(req, res) {
    res.render('classifieds');
  });

  app.get('/resources', function(req, res) {
    res.render('resources');
  })

  app.get('/skillsoffered', function(req, res) {
    res.render('skillsoffered');
  });

  app.get('/skillsneeded', function(req, res) {
    res.render('skillsneeded');
  });

  app.get('/itemsoffered', function(req, res) {
    res.render('itemsoffered');
  });

  app.get('/itemsneeded', function(req, res) {
    res.render('itemsneeded');
  });
}

/* │──Resource Share Route: "/resources" Template: home->home4
│ │
│ │──Skills Offered Route: "/skillsoffered" *Template:*Either Listing or Masony, Sbar?
│ │ │
│ │ │──Post Event Route: "/postresource" *Template:*duplicate
│ │
│ │──Skills Needed Route: "/itemsneeded" *Template:*Either Listing or Masony, Sbar?
│ │ │
│ │ │──Post Class Route: "/postresource" *Template:*duplicate
│ │
│ │──Items Offered Route: "/itemsoffered" *Template:*Either Listing or Masony, Sbar?
│ │ │
│ │ │──Post Meetups Route: "/postresource" *Template:*duplicate
│ │ │
│ │──Items Needed Route: "/itemsneeded" *Template:*Either Listing or Masony, Sbar?
│ │ │
│ │ │──Post Meetups Route: "/postresource" *Template:*duplicate */