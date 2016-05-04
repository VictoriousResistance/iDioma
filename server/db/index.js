module.exports = function() {
  var db = require('./db.js');
  var User = require('./models/userModel.js');

  // User.belongsToMany(Song, {through: 'UserSong'});
  // Song.belongsToMany(User, {through: 'UserSong'});

  db.sync({force: true});
};
