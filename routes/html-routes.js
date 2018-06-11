// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

var db = require("../models");
let classifieds = require('../data/hp-classifieds.json');
let faqs = require('../data/faq.json');

module.exports = function (app) {

  // Home Page
  app.get('/', function (req, res) {

    let hbsObject = {
      classifieds: classifieds,
      user: req.user
    }

    db.event.findAll({
      limit: 6,
      order: [
        ['date', 'ASC']
      ]
    }).then(function (eventInfo) {
      hbsObject.eventInfo = eventInfo;
    });

    db.classifieds.findAll({
      limit: 6,
      order: [
        ['date_added', 'ASC']
      ]
    }).then(function (classifiedsInfo) {
      hbsObject.classifiedsInfo = classifiedsInfo;
      res.render('index', { hbsObject: hbsObject });
    });

  });

  app.get('/community', function (req, res) {
    res.render('community');
  });

  app.get('/events', function (req, res) {

    db.event.findAll({
      order: [
        ['date', 'ASC']
      ]
    }).then(function (eventInfo) {
      // console.log(eventInfo);
      res.render('events', { events: eventInfo });
    })

  });

  app.get('/classes', function (req, res) {
    res.render('community');
  });

  app.get('/meetups', function (req, res) {
    res.render('meetups');
  });

  app.get('/faq', function (req, res) {
    let hbsObject = {
      faqs: faqs
    }
    // console.log(hbsObject);
    res.render('faq', { hbsObject: hbsObject });
  });

  app.get('/classifieds', function (req, res) {
    let hbsObject = {};

    db.event.findAll({
    }).then(function (eventInfo) {
      hbsObject.eventInfo = eventInfo[0];
      hbsObject.eventCount = eventInfo.length;
    });

    db.classifieds.findAll({
    }).then(function (classifiedsInfo) {
      hbsObject.classifiedsInfo = classifiedsInfo[0];
      hbsObject.classifiedsCount = classifiedsInfo.length;
    });

    console.log(hbsObject);
    res.render('classifieds', { hbsObject: hbsObject });

  });

  //form to post new resource
  app.get('/new-resource', function (req, res) {
    //if not logged in, redirect to login

    //if logged in
    res.render('postresource');
  })

  //show all resources
  app.get('/resources', function (req, res) {

    db.resource.findAll({
      limit: 20,
      order: [
        ['createdAt']
      ]
    }).then(function (data) {
      let hbsObject = {
        resource: data
      }

      res.render('resources', hbsObject);
    });
  })

  //show category of resource
  app.get('/resources/:type', function (req, res) {
    let type = req.params.type.replace('%20', ' ');

    db.resource.findAll({
      where: {
        // author_id: ?, // pass in
        category: type
      },
      limit: 20,
      order: [
        ['createdAt']
      ]
    }).then(function (data) {
      let hbsObject = {
        resource: data
      }
      res.render('resources', hbsObject);
    })
  })

};

