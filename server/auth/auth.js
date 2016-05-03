var config = require(__dirname + '/config.js');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: config.ID,
    clientSecret: config.SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'name', 'picture.type(large)']
  },

  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

exports.checkAuth = function(req, res, next) {
  if (req.session.passport ? req.session.passport.user : false) {
    console.log('user', req.user);
    console.log('session', req.session);
    return next();
  }
  res.redirect('/login');
};

exports.handleLogin = passport.authenticate('facebook');

exports.handleCallback = passport.authenticate('facebook', { successRedirect: '/home', failureRedirect: '/login' });