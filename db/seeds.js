let db = require('../models/');

function seeds() {

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
  ]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
      return db.user.findAll();
    }).then(users => {
    // console.log(resources)
  });

  db.resource.bulkCreate([
    {
      author_id: 527,
      title: "lawnmower for rent",
      description: "rent any weekend $20 (includes gas)",
      price: 20,
      category: "item offered",
      condition: "good"
    }, {
      author_id: 4421,
      title: "celebration cakes",
      description: "I make great event cakes starting at $30.",
      price: 30,
      category: "service offered",
      condition: "excellent"
    }
  ]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
    return db.resource.findAll();
  }).then(resources => {
    // console.log(resources)
  });
}

seeds();

module.exports = seeds;