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

    // find and count all categories
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

      // bikes category
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

        // electronics category
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

          // appliances category
          db.classifieds.findAll({
            where: {
              category: 'appliances'
            },
            order: [
              ['createdAt', 'DESC']
            ]
          }).then(function (classifiedAppliances) {
            // console.log('--------------------------------');
            // console.log(classifiedAppliances);
            hbsObject.appliances = {
              classifiedApplianceCount: classifiedAppliances.length,
              latest: classifiedAppliances[0]
            }

            // babyKid category
            db.classifieds.findAll({
              where: {
                category: 'babyKid'
              },
              order: [
                ['createdAt', 'DESC']
              ]
            }).then(function (classifiedBabyKid) {
              // console.log('--------------------------------');
              // console.log(classifiedBabyKid);
              hbsObject.BabyKid = {
                classifiedBabyKidCount: classifiedBabyKid.length,
                latest: classifiedBabyKid[0]
              }

              // clothes category
              db.classifieds.findAll({
                where: {
                  category: 'clothes'
                },
                order: [
                  ['createdAt', 'DESC']
                ]
              }).then(function (classifiedClothes) {
                // console.log('--------------------------------');
                // console.log(classifiedClothes);
                hbsObject.clothes = {
                  classifiedClothesCount: classifiedClothes.length,
                  latest: classifiedClothes[0]
                }

                // furniture category
                db.classifieds.findAll({
                  where: {
                    category: 'furniture'
                  },
                  order: [
                    ['createdAt', 'DESC']
                  ]
                }).then(function (classifiedFurniture) {
                  // console.log('--------------------------------');
                  // console.log(classifiedFurniture);
                  hbsObject.furniture = {
                    classifiedFurnitureCount: classifiedFurniture.length,
                    latest: classifiedFurniture[0]
                  }

                  // lawn category
                  db.classifieds.findAll({
                    where: {
                      category: 'lawn'
                    },
                    order: [
                      ['createdAt', 'DESC']
                    ]
                  }).then(function (classifiedLawn) {
                    // console.log('--------------------------------');
                    // console.log(classifiedLawn);
                    hbsObject.lawn = {
                      classifiedLawnCount: classifiedLawn.length,
                      latest: classifiedLawn[0]
                    }

                    // music category
                    db.classifieds.findAll({
                      where: {
                        category: 'music'
                      },
                      order: [
                        ['createdAt', 'DESC']
                      ]
                    }).then(function (classifiedMusic) {
                      // console.log('--------------------------------');
                      // console.log(classifiedMusic);
                      hbsObject.music = {
                        classifiedMusicCount: classifiedMusic.length,
                        latest: classifiedMusic[0]
                      }

                      // sports category
                      db.classifieds.findAll({
                        where: {
                          category: 'sports'
                        },
                        order: [
                          ['createdAt', 'DESC']
                        ]
                      }).then(function (classifiedSports) {
                        // console.log('--------------------------------');
                        // console.log(classifiedSports);
                        hbsObject.sports = {
                          classifiedSportsCount: classifiedSports.length,
                          latest: classifiedSports[0]
                        }

                        // tickets category
                        db.classifieds.findAll({
                          where: {
                            category: 'tickets'
                          },
                          order: [
                            ['createdAt', 'DESC']
                          ]
                        }).then(function (classifiedTickets) {
                          // console.log('--------------------------------');
                          // console.log(classifiedTickets);
                          hbsObject.tickets = {
                            classifiedTicketsCount: classifiedTickets.length,
                            latest: classifiedTickets[0]
                          }

                          // autos category
                          db.classifieds.findAll({
                            where: {
                              category: 'autos'
                            },
                            order: [
                              ['createdAt', 'DESC']
                            ]
                          }).then(function (classifiedAutos) {
                            // console.log('--------------------------------');
                            // console.log(classifiedAutos);
                            hbsObject.autos = {
                              classifiedAutosCount: classifiedAutos.length,
                              latest: classifiedAutos[0]
                            }

                            res.render('classifieds', { hbsObject: hbsObject });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  app.get('/classifieds/:category', function(req, res) {
    var category = req.params.category;

    let hbsObject = {
      user: req.user
    }

    db.classifieds.findAll({
      where: {
        category: category
      },
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

