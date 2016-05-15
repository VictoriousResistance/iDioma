module.exports = function(launchServer) {
  const db = require('./db.js');
  const Users = require('./models/userModel.js');
  const Languages = require('./models/languageModel.js');
  const Levels = require('./models/levelModel.js');
  const LanguagesLevels = require('./models/languageLevelModel.js');
  const UsersLanguagesLevels = require('./models/userLanguageLevelModel.js');
  const Messages = require('./models/messageModel.js');
  const Rooms = require('./models/roomModel.js');
  const UserRooms = require('./models/userRoomModel.js');
  const Relationships = require('./models/relationshipModel.js');

  const testDB = require('../tests/db.js');

  const languagesData = require('./seed/languages.js');
  const levelsData = require('./seed/levels.js');

  Languages.belongsToMany(Levels, { through: 'languages_levels', foreignKey: 'language_id' });
  Levels.belongsToMany(Languages, { through: 'languages_levels', foreignKey: 'level_id' });

  Users.belongsToMany(LanguagesLevels, { through: 'users_languages_levels', foreignKey: 'user_id' });
  LanguagesLevels.belongsToMany(Users, { through: 'users_languages_levels', foreignKey: 'language_level_id' });

  Users.belongsToMany(Rooms, { through: 'users_rooms', foreignKey: 'user_id' });
  Rooms.belongsToMany(Users, { through: 'users_rooms', foreignKey: 'room_id' });

  Messages.belongsTo(Rooms, { foreignKey: 'room_id' });
  Messages.belongsTo(Users, { foreignKey: 'user_id' });

  // ZACH: ideally call user1Id initiator and user2Id affected or soemthing
  Users.belongsToMany(Users, { as: 'User1', through: 'relationships', foreignKey: 'user1Id' });
  Users.belongsToMany(Users, { as: 'User2', through: 'relationships', foreignKey: 'user2Id' });

  // TODO: remove force true
  db.sync({ force: true })
    .then(languagesData.seed)
    .then(levelsData.seed)
    // make sure first test function does not need ANY inputs
    .then(testDB.addUsers)
    // don't need these since they're already seeded:
    // .then(testDB.addLevels)
    // .then(testDB.addLanguages)
    .then(testDB.addLanguagesLevels)
    .then(testDB.addUsersLanguagesLevels)
    .then(testDB.addRooms)
    .then(testDB.addUsersRooms)
    .then(testDB.addMessages)
    .then(testDB.addRelationships)
    // end of tests
    // .then(r => console.log(r))
    .then(() => launchServer());
};
