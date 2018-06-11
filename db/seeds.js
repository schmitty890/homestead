let db = require('../models/');

function seeds() {

  // seeds for users
  db.user.bulkCreate([
    {
      firstname: 'donna',
      lastname: 'dumdums',
      username: 'dumdums1',
      about: "Have you seen my cat? Always running off, that one!",
      email: 'donna@dumdums.com',
      password: 'password123',
      // last_login:
      status: 'active'
    },
    {
      firstname: 'dwayne',
      lastname: 'dumz',
      username: 'dumzguy',
      about: "Hey you kids keep it down!",
      email: 'dwayne@dumz.come',
      password: 'password123',
      // last_login:
      status: 'active'
    }
  ]);

  // seeds for resources
  db.resource.bulkCreate([
    {
      author_id: 527,
      title: "lawnmower for rent",
      description: "rent any weekend $20 (includes gas)",
      price: 20,
      category: "items offered",
      condition: "good"
    }, {
      author_id: 4421,
      title: "celebration cakes",
      description: "I make great event cakes starting at $30.",
      price: 30,
      category: "services offered",
      condition: "excellent"
    },
    {
      author_id: 12,
      title: "ladder needed",
      description: "time to clean the downspouts",
      price: 5,
      category: "items needed",
      condition: "n/a"
    }, {
      author_id: 4421,
      title: "painting gig",
      description: "Someone please paint my living room.",
      price: 30,
      category: "services needed",
      condition: "n/a"
    }

  ]);

  // seeds for events
  db.event.bulkCreate([
    {
      author_id: 527,
      title: "yard sale",
      description: "everybody get out any items you wish to sell",
      category: "Sell",
      date: "07/27/2018",
      location: "Lot 115"
    }, {
      author_id: 4421,
      title: "block party",
      description: "party it up with the block!",
      category: "Social",
      date: "06/24/2018",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: 527,
      title: "cookout",
      description: "hamburgers and hotdogs on da grill!",
      category: "Social",
      date: "06/13/2018",
      location: "Neighboorhood Cabana"
    }, {
      author_id: 123,
      title: "pool party",
      description: "get the floaties out!",
      category: "Social",
      date: "08/13/2018",
      location: "Clubhouse/Pool"
    }, {
      author_id: 321,
      title: "block party",
      description: "its gonna be wild!",
      category: "Social",
      date: "09/25/2018",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: 555,
      title: "volleyball tournament",
      description: "serve it up!",
      category: "Sports",
      date: "09/25/2018",
      location: "Pool-side beach volleyball court"
    }
  ]);

  // seeds for classifieds
  db.classifieds.bulkCreate([
    {
      author_id: 99,
      username: "BuckyBoi",
      name: "Bucky",
      email: "Bucky@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "1",
      details: "details about this product",
      date_added: "10/10/2018",
      category: "outdoor",
      condition: "Used"
    },{
      author_id: 100,
      username: "SkaterDude89",
      name: "Bill",
      email: "SkaterDude89@gmail.com",
      phone: "9191232367",
      title: "title to an awesome post",
      price: "10",
      details: "details about this product",
      date_added: "06/18/2018",
      category: "auto",
      condition: "Like new"
    },{
      author_id: 101,
      username: "StarGazer",
      name: "Star",
      email: "StarGazer@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "4",
      details: "details about this product",
      date_added: "11/10/2018",
      category: "auto",
      condition: "Like new"
    },{
      author_id: 102,
      username: "LukeSky",
      name: "Luke",
      email: "LukeSky@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "105",
      details: "details about this product",
      date_added: "12/10/2018",
      category: "outdoor",
      condition: "Used"
    },{
      author_id: 103,
      username: "Lucy99",
      name: "Lucy",
      email: "Lucy99@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "7",
      details: "details about this product",
      date_added: "08/03/2018",
      category: "outdoor",
      condition: "Used"
    },{
      author_id: 104,
      username: "Troll",
      name: "Bucky",
      email: "blah@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "23",
      details: "details about this product",
      date_added: "08/13/2018",
      category: "auto",
      condition: "Used"
    },{
      author_id: 105,
      username: "DanTheMan",
      name: "Dan",
      email: "DanTheMan@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "78",
      details: "details about this product",
      date_added: "10/18/2018",
      category: "outdoor",
      condition: "Like new"
    },{
      author_id: 106,
      username: "Tazman",
      name: "Taz",
      email: "Tazman@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "5",
      details: "details about this product",
      date_added: "11/22/2018",
      category: "auto",
      condition: "Like new"
    },{
      author_id: 107,
      username: "SuzySue",
      name: "Suz",
      email: "SuzySue@gmail.com",
      phone: "9191234567",
      title: "title to an awesome post",
      price: "99",
      details: "details about this product",
      date_added: "10/10/2018",
      category: "outdoor",
      condition: "Like new"
    },{
      author_id: 108,
      username: "BillyBob",
      name: "Bill bob",
      email: "BillyBob@gmail.com",
      phone: "9191875567",
      title: "title to an awesome post",
      price: "193",
      details: "details about this product",
      date_added: "09/03/2018",
      category: "auto",
      condition: "Like new"
    }
  ]);


}
// commenting this out as we are invoking it on server.js
// seeds();

module.exports = seeds;
