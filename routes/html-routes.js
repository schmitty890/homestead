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

/*   app.get('/community', function (req, res) {
    let hbsObject = {
      user: req.user
    }
    res.render('community', {hbsObject: hbsObject });
  }); */

  app.get('/events', function (req, res) {
    //didn't mess with, seems like we need to make eventInfo a sub of the handlebars object
    //don't want to break all of Eric's work on accident
    db.event.findAll({
      order: [
        ['date', 'ASC']
      ]
    }).then(function (eventInfo) {
      // console.log(eventInfo);
      res.render('events', { events: eventInfo });
    })

  });

/*   app.get('/classes', function (req, res) {
    res.render('community');
  });

  app.get('/meetups', function (req, res) {
    res.render('meetups');
  }); */

  app.get('/faq', function (req, res) {
    let hbsObject = {
      faqs: faqs,
      user: req.user
    }
    res.render('faq', { hbsObject: hbsObject });
  });

  app.get('/classifieds', function (req, res) {
    let hbsObject = {
      user: req.user
    }

    db.classifieds.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (classifiedsInfo) {
      // console.log('--------------------------------');
      // console.log(classifiedsInfo[0])
      hbsObject.total = {
        classifiedsCount: classifiedsInfo.length,
        latest: classifiedsInfo[0]
      }
      db.classifieds.findAll({
        where: {
          category: 'bikes'
        },
        order: [
          ['createdAt', 'DESC']
        ]
      }).then(function (classifiedBikes) {
        // console.log('--------------------------------');
        // console.log(classifiedBikes);
        hbsObject.bikes = {
          classifiedBikeCount: classifiedBikes.length,
          latest: classifiedBikes[0]
        }

        db.classifieds.findAll({
          where: {
            category: 'electronics'
          },
          order: [
            ['createdAt', 'DESC']
          ]
        }).then(function (classifiedElectronics) {
          // console.log('--------------------------------');
          // console.log(classifiedElectronics);
          hbsObject.electronics = {
            classifiedElectronicCount: classifiedElectronics.length,
            latest: classifiedElectronics[0]
          }

          res.render('classifieds', { hbsObject: hbsObject });
        });
      });
    });
  });

  //form to post new resource
  app.get('/new-resource', function (req, res) {
    //if not logged in, redirect to login

    //if logged in
    res.render('postresource');
  })

  //show all resources
  app.get('/resources', function (req, res) {
    //console.log(req)
    //let resourceUserHolder = req.user
    db.resource.findAll({
      limit: 20,
      order: [
        ['createdAt']
      ]
    }).then(function (data/*, resourceUserHolder */) {
      //console.log(resourceUserHolder)
      let hbsObject = {
        resource: data,
        //user: resourceUserHolder
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

