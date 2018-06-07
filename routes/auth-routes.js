const authController = require('../controller/authcontroller');
const passport   = require('passport')

module.exports = function(app) {
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  //applys strategy to signup route
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/account',
    failureRedirect: '/signup'
  }));
  app.get('/dashboard',isLoggedIn, authController.account);
  app.get('/logout',authController.logout);
  app.post('/signin', passport.authenticate('local-signin',  { 
    successRedirect: '/account',
    failureRedirect: '/signin'}
  ));

  //function to protect routes
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  }
}