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
  var test = require('./controllers/getRoomIdsAndUserIdsGivenSelfId.js')


  Languages.belongsToMany(Levels, {through: 'languages_levels', foreignKey: 'language_id' });
  Levels.belongsToMany(Languages, {through: 'languages_levels', foreignKey: 'level_id' });

  Users.belongsToMany(LanguagesLevels, {through: 'users_languages_levels', foreignKey: 'user_id' });
  LanguagesLevels.belongsToMany(Users, {through: 'users_languages_levels', foreignKey: 'language_level_id' });

  Users.belongsToMany(Rooms, {through: 'users_rooms', foreignKey: 'user_id' });
  Rooms.belongsToMany(Users, {through: 'users_rooms', foreignKey: 'room_id' });

  Messages.belongsTo(Rooms, { foreignKey: 'room_id' });
  Messages.belongsTo(Users, { foreignKey: 'user_id' });

  Users.belongsToMany(Users, {as: 'User1', through: 'relationships', foreignKey: 'user1Id' });
  Users.belongsToMany(Users, {as: 'User2', through: 'relationships', foreignKey: 'user2Id' });

  db.sync({force: true})
    .then(function() {
      return Rooms.bulkCreate([
        { number_active_participants: 2 },
        { number_active_participants: 3 },
      ]);
    })
    .then(function(rooms) {
      return Users.bulkCreate([
        { facebook_id: 1234, first_name: 'Ash' },
        { facebook_id: 3456, first_name: 'Mo' },
        { facebook_id: 5678, first_name: 'Reina' },
      ])
      .then(function(users) {
        // console.log('USERS: ', users)
        // console.log('ROOMS: ', rooms)
        users.forEach((user) => { user.addRoom(rooms[1]); });
        users[0].addRoom(rooms[0]);
      });
    })
    .then(function() {
      return Users.findOne({ where: { first_name: 'Ash' } })
        .then(function(result) {
          return test(result.dataValues.id);
        });
    });
  //TODO: remove force true

};
