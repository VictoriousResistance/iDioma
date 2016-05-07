module.exports = function() {
  var db = require('./db.js');
  var User = require('./models/userModel.js');
  var Language = require('./models/languageModel.js');
  var Level = require('./models/levelModel.js');
  var LanguageLevel = require('./models/languageLevelModel.js');
  var UserLanguageLevel = require('./models/userLanguageLevelModel.js');
  var Message = require('./models/messageModel.js');
  var Room = require('./models/roomModel.js');
  var UserRoom = require('./models/userRoomModel.js');


  Language.belongsToMany(Level, {through: 'LanguageLevel'});
  Level.belongsToMany(Language, {through: 'LanguageLevel'});

  User.belongsToMany(LanguageLevel, {through: 'UserLanguageLevel'});
  LanguageLevel.belongsToMany(User, {through: 'UserLanguageLevel'});

  User.belongsToMany(Room, {through: 'UserRoom'});
  Room.belongsToMany(User, {through: 'UserRoom'});

  Message.belongsTo(Room);
  Message.belongsTo(User);

// creates duplicates -- investigate
  // Language.bulkCreate([
  //   {languageName: 'English'},
  //   {languageName: 'Spanish'},
  //   {languageName: 'French'}
  //   ]
  //   );

  db.sync();

};
