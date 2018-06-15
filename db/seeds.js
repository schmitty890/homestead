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
    },{
      firstname: 'tommy',
      lastname: 'tomison',
      username: 'tommyt',
      about: "Nothing notable really",
      email: 'tommyn.gre@gmail.com',
      password: "$2a$08$w0/oyZgS4ded.Dvm7pvfPuZNhJN.e8XNaWV.STPRhPWpFYxKt6hGW",
      status: 'active'
    },{
      firstname: 'joe',
      lastname: 'joeferson',
      username: 'managerJoe',
      about: "I run this place!",
      email: 'joe@manager.com',
      password: "$2a$08$4l1Huo8LhhmJGK.2YN8ICOePfImACiO1lTRWivKUIGthKDRPAFNQ2",
      manager: true,
      status: 'active'
    },{
      firstname: 'joe',
      lastname: 'userson',
      username: 'userJoe',
      about: "I am always looking for  doggie meetup!",
      email: 'joe@user.com',
      password: "$2a$08$4l1Huo8LhhmJGK.2YN8ICOePfImACiO1lTRWivKUIGthKDRPAFNQ2",
      status: 'active'
    }
  ]);

  // seeds for resources
  db.resource.bulkCreate([
    {
      author_id: 999,
      email: "DonnaJames@gmails.com",
      title: "lawnmower for rent",
      description: "rent any weekend for $20 (includes gas). free if you're my neighbor who never mows!",
      image: "http://www.top5lawnmowers.com/wp-content/uploads/2016/04/Lawn-Boy-10734-Kohler-Electric-Start-Self-Propelled-Gas-Walk-Behind-Mower-with-grass-catcher.jpg?x34163",
      category: "items offered",
    }, {
      author_id: 998,
      email: "DonnaJames@gmails.com",
      title: "professionally decorated cakes",
      description: "in a former life, i was a professional baker? have a birthday party, or another type of celebration? i can make you a beautifully decorated cake, starting at $30",
      image: "https://images2.jiji.ng/7542824_75590-1007125909323523-4572801979836239257-n_620x620.jpg",
      category: "services offered",
    },
    {
      author_id: 997,
      email: "Dale080354@yahoos.com",
      title: "ladder needed",
      description: "time to clean the downspouts. can anyone loan me a ladder?",
      image: "https://i.ebayimg.com/images/i/310701016266-0-1/s-l1000.jpg",
      category: "items needed",
    }, {
      author_id: 996,
      title: "painting gig",
      email: "DonnaJames@gmails.com",
      description: "anyone have painting supplies and willing to paint my kitten's bedroom? will pay $20/hour",
      image: "https://www.house-painting-info.com/wp-content/uploads/2014/06/create-a-readytogo-painting-kit-21719007.jpg",
      category: "services needed",
    },
    {
      author_id: 995,
      title: "headphones",
      email: "DanaVelasquez@hotmails.com",
      description: "does anyone have a pair of noise cancelling headphones? certain individuals with certain pets with certain ill manners have recently been certainly quite loud",
      image: "http://barkpost.com.br/wp-content/uploads/2015/05/Charlie-Golden-Retriever-Worlds-Loudest-Bark.jpg",
      category: "items needed",
    },
    {
      author_id: 995,
      title: "motivational coach",
      email: "DanaVelasquez@hotmails.com",
      description: "persuasive person needed to convince my a certain individual to complete expected yardwork",
      image: "https://www.thewrap.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-07-at-12.52.30-PM.png",
      category: "services needed",
    }


  ]);

  // seeds for events
  db.event.bulkCreate([
    {
      author_id: "blah@gmail.com",
      title: "Yard Sale",
      description: "Everybody get out any items you wish to sell",
      category: "Sell",
      date: "2018-07-25 8:30:00",
      endDate: "2018-07-25 14:30:00",
      location: "Lot 115"
    }, {
      author_id: "catchbb14@gmail.com",
      title: "Block Party",
      description: "Party it up with the block!",
      category: "Social",
      date: "06/24/2018 19:00:00",
      endDate: "06/25/2018 02:00:00",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: "catchbb14@gmail.com",
      title: "Cook-out",
      description: "Hamburgers and hotdogs on da grill!",
      category: "Social",
      date: "06/13/2018",
      location: "Neighboorhood Cabana"
    }, {
      author_id: "dumdum@gmail.com",
      title: "Pool Party",
      description: "Get the floaties out!",
      category: "Social",
      date: "08/13/2018",
      location: "Clubhouse/Pool"
    }, {
      author_id: "letsgo@yahoo.com",
      title: "Block Party",
      description: "It's gonna be wild!",
      category: "Social",
      date: "09/25/2018",
      location: "Seasame Street Cul-de-sac"
    }, {
      author_id: "play123@gmail.com",
      title: "Volleyball Tournament",
      description: "Serve it up!",
      category: "Sports",
      date: "09/25/2018",
      location: "Pool-side beach volleyball court",
      allDay: true
    }, {
      author_id: "admin@hoa.com",
      title: "Member-appreciation week!",
      description: "Come by the clubhouse for your treat this week!",
      category: "Community",
      date: "06/25/2018",
      endDate: "06/29/2018",
      location: "Clubhouse"
    }
  ]);

  // seeds for classifieds
  db.classifieds.bulkCreate([
    { author_id: 99, username: "BuckyBoi", name: "Bucky", email: "Bucky@gmail.com", phone: "9191234567", title: "Android", image: "https://www.android.com/static/2016/img/phones/assistant-ui_1x.jpg", price: "75", details: "Android phone", date_added: "10/10/2018", category: "phone", type: "applePhone", condition: "Used"},
    { author_id: 100, username: "SkaterDude89", name: "Bill", email: "SkaterDude89@gmail.com", phone: "9191232367", title: "stones shirt", image: "https://target.scene7.com/is/image/Target/52252380?wid=488&hei=488&fmt=pjpeg", price: "10", details: "rolling stones shirt", date_added: "06/18/2018", category: "clothes", type: "mensClothes", condition: "Like new" },
    { author_id: 101, username: "StarGazer", name: "Star", email: "StarGazer@gmail.com", phone: "9191234567", title: "Jeep", image: "http://st.motortrend.com/uploads/sites/10/2017/12/2018-Jeep-Wrangler-JK.jpg", price: "12000", details: "Like new, never been offroad", date_added: "11/10/2018", category: "autos", type: "cars", condition: "Like new" },
    { author_id: 102, username: "LukeSky", name: "Luke", email: "LukeSky@gmail.com", phone: "9191234567", title: "Samsung TV", image: "http://www.lg.com/us/images/tvs/md05802269/gallery/medium01.jpg", price: "105", details: "42 inch tv", date_added: "12/10/2018", category: "electronics", type: "tvs", condition: "Used" },
    { author_id: 103, username: "Lucy99", name: "Lucy", email: "Lucy99@gmail.com", phone: "9191234567", title: "Toro Lawn Mower", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYsI1dmds6KSddD92XbeZSo3AUMjDSO5N9BwxI3m5QBHX-d2f2A", price: "700", details: "Cuts grass like a dresm", date_added: "08/03/2018", category: "lawn", type: "lawnEq", condition: "Used" },
    { author_id: 104, username: "Troll", name: "Bucky", email: "blah@gmail.com", phone: "9191234567", title: "Carolina Hurricanes Tickets", image: "https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg", price: "43", details: "Section 201 tickets!", date_added: "08/13/2018", category: "tickets", type: "sportsTickets", condition: "Used" },
    { author_id: 105, username: "DanTheMan", name: "Dan", email: "DanTheMan@gmail.com", phone: "9191234567", title: "kid clothes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHRdVAs9jPAEuN_xczfoHShNAxsom3tbzXTUZefjfjaH125LZ", price: "78", details: "nirvana", date_added: "10/18/2018", category: "babyKid", type: "toys", condition: "Like new" },
    { author_id: 106, username: "Tazman", name: "Taz", email: "Tazman@gmail.com", phone: "9191234567", title: "Durham Bulls Tickets", image: "https://ingersollchamber.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg", price: "5", details: "Tickets to the Durham Bulls", date_added: "11/22/2018", category: "tickets", type: "sportsTickets", condition: "Like new" },
    { author_id: 107, username: "SuzySue", name: "Suz", email: "SuzySue@gmail.com", phone: "9191234567", title: "iphone6", image: "https://static1.squarespace.com/static/523422d9e4b011d42dd74d71/t/525ab5bce4b018d72382e43d/1433427905193/Cleartones_Organici_Phone.jpg", price: "99", details: "details about this product", date_added: "10/10/2018", category: "phones", type: "androidPhone", condition: "Like new" },
    { author_id: 295, username: "Joey", name: "Joey", email: "Joey@gmail.com", phone: "9191875567", title: "Honda Civic", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2015_Honda_Civic_Si_Coupe_Orange.JPG/1200px-2015_Honda_Civic_Si_Coupe_Orange.JPG", price: "8000", details: "Honda Civic, red with leather interior", date_added: "09/03/2018", category: "autos", type: "cars", condition: "Like new" },
    { author_id: 301, username: "Brad", name: "Brad", email: "brad@gmail.com", phone: "9191875567", title: "Ford F150", image: "http://st.motortrend.com/uploads/sites/10/2017/08/2018-Ford-F-150-front-three-quarter-03.jpg", price: "14000", details: "2013 Ford F150, 140k miles", date_added: "09/03/2018", category: "autos", type: "trucks", condition: "Like new" },
    { author_id: 123, username: "phil", name: "phil", email: "phil@gmail.com", phone: "9191875567", title: "RV Trailer", image: "https://res.cloudinary.com/camping-world/image/upload/q_auto,f_auto,fl_lossy/images/popular-brands/heartland_mallard.jpg", price: "9000", details: "Fifth wheel trailer, great for the family vacation!", date_added: "09/03/2018", category: "autos", type: "rvs", condition: "Like new" },
    { author_id: 234, username: "aaron", name: "aaron", email: "aaron@gmail.com", phone: "9191875567", title: "HP Computer", image: "https://img.grouponcdn.com/deal/2CAi48mgEhk9UCHAaZcHrEZkfNgW/2C-2000x1200/v1/c700x420.jpg", price: "300", details: "You can learn how to do a lot of cool things with this computer, like write code!", date_added: "09/03/2018", category: "electronics", type: "computers", condition: "Like new" },
    { author_id: 543, username: "ben", name: "ben", email: "ben@gmail.com", phone: "9191875567", title: "Dinosaur", image: "https://images-na.ssl-images-amazon.com/images/I/41VKmaduOHL._SX355_.jpg", price: "10", details: "Prehistoric figure for the kids", date_added: "09/03/2018", category: "babyKid", type: "toys", condition: "Like new" },
    { author_id: 55, username: "derek", name: "derek", email: "derek@gmail.com", phone: "9191875567", title: "Summer Shoes", image: "https://m.media-amazon.com/images/G/01/2018/womens-shoes/march/4408773._CB499609396_.jpg", price: "70", details: "Red shoes", date_added: "09/03/2018", category: "clothes", type: "womensClothes", condition: "Like new" },
    { author_id: 865, username: "dylan", name: "dylan", email: "dylan@gmail.com", phone: "9191875567", title: "Guitar", image: "https://cdn.shopify.com/s/files/1/1100/8976/products/original.jpg?v=1490372142", price: "250", details: "Good vibes", date_added: "09/03/2018", category: "music", type: "guitars", condition: "Like new" },
    { author_id: 2345, username: "tom", name: "tom", email: "tom@gmail.com", phone: "9191875567", title: "Drum Set", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIn4Kz6OM4fVqrTBjGHDjv7SA3Yyc0zIi0DOiixcuvJ6dzrKoN", price: "650", details: "Beat it up", date_added: "09/03/2018", category: "music", type: "drums", condition: "Like new" },
    { author_id: 55, username: "sara", name: "sara", email: "sara@gmail.com", phone: "9191875567", title: "40lb weight", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwUNl13Kqcy0J1xGN9CEt3pgugZuJGj0OqdUUb7H2A--z4tyW", price: "20", details: "get buff with this dumbbell", date_added: "09/03/2018", category: "sports", type: "fitness", condition: "Like new" },
    { author_id: 098, username: "ray", name: "ray", email: "ray@gmail.com", phone: "9191875567", title: "KitchenAid Mixer", image: "https://target.scene7.com/is/image/Target/51021848?wid=328&hei=328&qlt=80&fmt=pjpeg", price: "20", details: "Mix all kinds of things!", date_added: "09/03/2018", category: "appliances", type: "kitchen", condition: "Like new" }
  ]);


}
// commenting this out as we are invoking it on server.js
// seeds();

module.exports = seeds;
