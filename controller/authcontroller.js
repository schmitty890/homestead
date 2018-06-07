var exports = module.exports = {}
//not using this yet
//const db = require("../models");

exports.signup = function(req,res){
  res.render('signup');
}

exports.signin = function(req,res){
  res.render('signin');
}

//example of how we can grab data coming through the route before rendering.
//when in doubt about carrying data into a new route, console.log your req here.
//hit me up if you run into confusion obviously -Joe
exports.account = function(req, res) {
  res.render('account', { userId: req.user.id });
}

// logout route from header lands here and destroys the express session then redirects to home.
exports.logout = function(req,res){
  req.session.destroy(function() {
    res.redirect('/');
  });
}
