// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// var db = require("../models");

module.exports = function(app) {

  // Home Page
  app.get('/', function(req, res) {
    res.render('index', {title: 'homestead'});
  });

  // Frequently Asked Questions
  app.get('/faq', function(req, res) {
    res.render('faq')
  })

};
