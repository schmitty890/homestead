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

    let hbsObject = {
      user: req.user,
      signedIn: (req.user !== undefined)
    }

    db.event.findAll({
      order: [
        ['date', 'ASC']
      ],
      where: {
        date : {
          $gte: db.Sequelize.fn('CURDATE')
        },
        $or: [
          {
            endDate : {
              $gte: db.Sequelize.fn('CURDATE')
            }
          }
        ]
      }
    }).then(function (eventInfo) {
      hbsObject.eventInfo = eventInfo;
      res.render('events', { hbsObject: hbsObject });
    })

  });

  app.get('/events:cat', function (req, res) {


    let cat = req.params.cat;
    let hbsObject = {
      user: req.user,
      signedIn: (req.user !== undefined)
    }

    db.event.findAll({
      order: [
        ['date', 'ASC']
      ],
      where: {
        category: cat
      }
    }).then(function (eventInfo) {
      hbsObject.eventInfo = eventInfo;
      res.render('events', { hbsObject: hbsObject });
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

  app.get('/classifieds', function (req, res, next) {
    let hbsObject = {
      user: req.user
    }

    // find and count all categories
    db.classifieds.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (classifiedsInfo) {
      // console.log('--------------------------------');
      // console.log(classifiedsInfo[0])
      hbsObject.total = {
        classifiedCount: classifiedsInfo.length,
        latest: classifiedsInfo[0]
      }

      res.locals.user = hbsObject;
      next();
    });
  }, function (req, res, next) {
    hbsObject = res.locals.user;
    var categories = ['bikes', 'electronics', 'appliances', 'babyKid', 'clothes', 'furniture', 'lawn', 'music', 'sports', 'autos', 'phones', 'tickets'];
    // var categories = ['clothes', 'appliances'];
    // loop over array of categories
    categories.forEach(function (category) {
      // console.log(category);
      db.classifieds.findAll({
        where: {
          category: category
        },
        order: [
          ['createdAt', 'DESC']
        ]
      }).then(function (classifiedAd) {
        // console.log('--------------------------------');
        // console.log(classifiedAd);

        hbsObject[category] = {
          classifiedCount: classifiedAd.length,
          latest: classifiedAd[0]
        }
      });
    });

    res.render('classifieds', { hbsObject: hbsObject });
  });

  app.get('/classifieds/:category', function (req, res) {
    var category = req.params.category;
    var whereAt = {};
    // build out where clause if there is a query parameter or not
    if(req.query.type === undefined) {
      whereAt = {
      category: category
      }
    } else {
      whereAt = {
        category: category,
        type: req.query.type
      }
    }
    let hbsObject = {
      user: req.user
    }
    db.classifieds.findAll({
      where: whereAt,
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (classifieds) {
      console.log('--------------------------------');
      // console.log(classifiedAutos);
      hbsObject.category = {
        classifieds: classifieds
      }
      // console.log(hbsObject.category.classifieds);

      res.render('classifieds_list_page', { hbsObject: hbsObject });
    });

  });

  //form to post new resource
  app.get('/new-resource', function (req, res) {

    let hbsObject = {
      user: req.user
    }

    //if logged in
    res.render('postresource', { hbsObject: hbsObject });
  })

  //show all resources
  app.get('/resources', function (req, res) {

    let hbsObject = {
      user: req.user
    }

    db.resource.findAll({
      limit: 20,
      order: [
        ['createdAt']
      ]
    }).then(function (data) {

      hbsObject.resources = {
        resources: data,
      }

      res.render('resources', { hbsObject: hbsObject });
    });
  })

  //show category of resource
  app.get('/resources/:type', function (req, res) {

    let hbsObject = {
      user: req.user
    }

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

      hbsObject.resources = {
        resources: data,
      }

      res.render('resources', { hbsObject: hbsObject });
    })
  })

  app.get('/messages', function (req, res) {
    let hbsObject = {
      user: req.user

    }

    // find and count all categories
    db.message.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function (data) {
      hbsObject.messages = {
        messages: data,
      }
      console.log("hey " + JSON.stringify(hbsObject))
      res.render('messages', { hbsObject: hbsObject });
    });
  })

};

