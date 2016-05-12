const db = require('../db/db.js');
const Users = require('../db/models/userModel.js');
const Languages = require('../db/models/languageModel.js');
const Levels = require('../db/models/levelModel.js');
const LanguagesLevels = require('../db/models/languageLevelModel.js');
const UsersLanguagesLevels = require('../db/models/userLanguageLevelModel.js');
const Messages = require('../db/models/messageModel.js');
const Rooms = require('../db/models/roomModel.js');
const UserRooms = require('../db/models/userRoomModel.js');
const Relationships = require('../db/models/relationshipModel.js');

const storage = module.exports.storage = {};

const storeResults = module.exports.storeResults = (key, value) => {
  storage[key] = value;
  return storage;
};

module.exports.addUsers = () => {
  return Users.bulkCreate([
    {
      id: '12345',
      facebook_id: '11111',
      last_name: 'Naqvi',
      first_name: 'Muhammad',
      photo_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12650879_1057351587660293_1561191701422265647_n.jpg?oh=1c2c208ef646239f6cedb8a79f582572&oe=57996888',
    },
    {
      id: '678910',
      facebook_id: '22222',
      last_name: 'Mei',
      first_name: 'Reina',
      photo_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12650879_1057351587660293_1561191701422265647_n.jpg?oh=1c2c208ef646239f6cedb8a79f582572&oe=57996888',
    },
    {
      id: '111213',
      facebook_id: '33333',
      last_name: 'Ravi',
      first_name: 'Ashwin',
      photo_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12650879_1057351587660293_1561191701422265647_n.jpg?oh=1c2c208ef646239f6cedb8a79f582572&oe=57996888',
    },
  ]).then(r => storeResults('users', r));
};

module.exports.addLevels = () => {
  return Levels.bulkCreate([
    {
      id: 1,
      name: 'Beginner',
    },
    {
      id: 2,
      name: 'Intermerdiate',
    },
    {
      id: 3,
      name: 'Expert',
    },
  ]).then(r => storeResults('levels', r));
};

module.exports.addLanguages = () => {
  return Languages.bulkCreate([
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
  ]).then(r => storeResults('languages', r));
};

module.exports.addLanguagesLevels = () => {
  return LanguagesLevels.bulkCreate([
    {
      language_id: 1,
      level_id: 1,
    },
    {
      language_id: 1,
      level_id: 3,
    },
    {
      language_id: 2,
      level_id: 2,
    },
    {
      language_id: 2,
      level_id: 3,
    },
    {
      language_id: 3,
      level_id: 1,
    },
    {
      language_id: 3,
      level_id: 3,
    },
  ]).then(r => storeResults('languagesLevels', r));
};

module.exports.addUsersLanguagesLevels = (obj) => {
  // Mo speaks English and wants to learn Spanish
  obj.users[0].addLanguages_level(obj.languagesLevels[1], { offer_or_learn: 'offer' });
  obj.users[0].addLanguages_level(obj.languagesLevels[2], { offer_or_learn: 'learn' });

  // Reina speaks Spanish and English and wants to learn French
  obj.users[1].addLanguages_level(obj.languagesLevels[1], { offer_or_learn: 'offer' });
  obj.users[1].addLanguages_level(obj.languagesLevels[3], { offer_or_learn: 'offer' });
  obj.users[1].addLanguages_level(obj.languagesLevels[4], { offer_or_learn: 'learn' });

  // Ashwin speaks French and wants to learn Spanish and English
  obj.users[2].addLanguages_level(obj.languagesLevels[5], { offer_or_learn: 'offer' });
  obj.users[2].addLanguages_level(obj.languagesLevels[0], { offer_or_learn: 'learn' });
  obj.users[2].addLanguages_level(obj.languagesLevels[2], { offer_or_learn: 'learn' });

  return obj;
};

module.exports.addRooms = () => {
  return Rooms.bulkCreate([
    { id: '3333', number_active_participants: 2 },
    { id: '5555', number_active_participants: 3 },
  ]).then(r => storeResults('rooms', r));
};

module.exports.addUsersRooms = (obj) => {
  obj.users.forEach(user => user.addRoom(obj.rooms[1]));
  obj.users[0].addRoom(obj.rooms[0]);
  return obj;
};

module.exports.addMessages = (obj) => {
  const room0 = obj.rooms[0].dataValues.id;
  const room1 = obj.rooms[1].dataValues.id;
  const Mo = obj.users[0].dataValues.id;
  const Reina = obj.users[1].dataValues.id;
  const Ashwin = obj.users[2].dataValues.id;

  return Messages.bulkCreate([
    { body: 'Take a look at the docs', room_id: room0, user_id: Mo },
    { body: 'Mo, please stop you\'re making me uncomfortable', room_id: room0, user_id: Ashwin },
    { body: 'Really, you\'re creeping me out', room_id: room0, user_id: Ashwin },
    { body: 'I thought this was a place to learn, put that thing away', room_id: room0, user_id: Ashwin },
    { body: 'Thats it, I\'m reporting you', room_id: room0, user_id: Ashwin },

    { body: 'Hi Mo', room_id: room1, user_id: Reina },
    { body: 'Hi Reina', room_id: room1, user_id: Mo },
    { body: 'Avalon?', room_id: room1, user_id: Reina },
    { body: 'No, too much work', room_id: room1, user_id: Mo },
    { body: 'Fine, one game', room_id: room1, user_id: Mo },
  ])
  .then(r => storeResults('messages', r));
};
