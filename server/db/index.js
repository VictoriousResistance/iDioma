module.exports = function() {
  var db = require('./db.js');
  var Users = require('./models/userModel.js');
  var Languages = require('./models/languageModel.js');
  var Levels = require('./models/levelModel.js');
  var LanguagesLevels = require('./models/languageLevelModel.js');
  var UsersLanguagesLevels = require('./models/userLanguageLevelModel.js');
  var Messages = require('./models/messageModel.js');
  var Rooms = require('./models/roomModel.js');
  var UserRooms = require('./models/userRoomModel.js');
  var Relationships = require('./models/relationshipModel.js');


  Languages.belongsToMany(Levels, {through: 'languages_levels'});
  Levels.belongsToMany(Languages, {through: 'languages_levels'});

  Users.belongsToMany(LanguagesLevels, {through: 'users_languages_levels'});
  LanguagesLevels.belongsToMany(Users, {through: 'users_languages_levels'});

  Users.belongsToMany(Rooms, {through: 'users_rooms'});
  Rooms.belongsToMany(Users, {through: 'users_rooms'});

  Messages.belongsTo(Rooms);
  Messages.belongsTo(Users);

  Users.belongsToMany(Users, {as: 'User1', through: 'relationships', foreignKey: 'user1Id'});
  Users.belongsToMany(Users, {as: 'User2', through: 'relationships', foreignKey: 'user2Id'});

  db.sync({force: true}).then(function() {
    Languages.bulkCreate([
      {name: 'English'},
      {name: 'Spanish'},
      {name: 'French'},
      ]
      );
  });
  //TODO: remove force true

};
