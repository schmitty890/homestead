//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport,user){

var User = user;
var LocalStrategy = require('passport-local').Strategy;

//serialize user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(user) {
    if(user){
      done(null, user.get());
    }
    else{
      done(user.errors,null);
    }
  });
});

//this is the localstrategy that sets up how auth is carried locally to the session
//in config because it configs how session auth works, this is standard location
//this is the hard part, also encryption via hashing happens here
passport.use('local-signup', new LocalStrategy(
  {           
    usernameField : 'email', //overriding to login by email for now, more typical
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, email, password, done){
    //fucntion to hash for encryption
    var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    //check to see if user already exists
    User.findOne({where: {email:email}}).then(function(user){
    if(user) {
      return done(null, false, {message : 'That email is already taken'} );
    } else
    {
      var userPassword = generateHash(password);
      var data =
      { email:email,
      password:userPassword,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    };
    //if not already existing, create new user and return values to session
    User.create(data).then(function(newUser,created){
      if(!newUser){
        return done(null,false);
      }
      if(newUser){
        return done(null,newUser);  
      }
    });
    }
  }); 
}));
  
//LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy( 
{
  // by default, local strategy uses username and password, we will override with email for now and change if we want to later see above comment
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},

function(req, email, password, done) {

  var User = user;
  //checks password for above user
  var isValidPassword = function(userpass,password){
    return bCrypt.compareSync(password, userpass);
  }
  //checks for the email, if there, checks the password, if succeeds, pushes user to session values
  User.findOne({ where : { email: email}}).then(function (user) {
    if (!user) {
      return done(null, false, { message: 'Email does not exist' });
    }
    if (!isValidPassword(user.password,password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    var userinfo = user.get();
    return done(null,userinfo);
  }).catch(function(err){
    console.log("Error:",err);
    return done(null, false, { message: 'Something went wrong with your Signin' });
  });
}
));
}