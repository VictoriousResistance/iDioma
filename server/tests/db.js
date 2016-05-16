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

// arrow functions automatically return if 1 line
module.exports.addUsers = () =>
  Users.bulkCreate([
    {
      id: '12345',
      facebook_id: '1122067557855362',
      last_name: 'Naqvi',
      first_name: 'Muhammad',
      photo_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/12650879_1057351587660293_1561191701422265647_n.jpg?oh=1c2c208ef646239f6cedb8a79f582572&oe=57996888',
    },
    {
      id: '678910',
      facebook_id: '1556463314683658',
      last_name: 'Mei',
      first_name: 'Reina',
      photo_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/9448_1385754095087915_416072552572854900_n.jpg?oh=f3539c78e31e25039e3b678759a962ce&oe=57D8D7B9',
    },
    {
      id: '111213',
      facebook_id: '10106480085987553',
      last_name: 'Ravi',
      first_name: 'Ashwin',
      photo_url: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/10474675_10104083394007493_4059254427085666486_n.jpg?oh=d92cf7d27951e313eba87dfc7bfa9dc3&oe=57A317B2',
    },
  ]).then(r => storeResults('users', r));

module.exports.addRelationships = (obj) => {
  const Mo = obj.users[0].dataValues.id;
  const Reina = obj.users[1].dataValues.id;
  const Ashwin = obj.users[2].dataValues.id;

  return Relationships.bulkCreate([
    {
      id: '121212',
      type: 'connection',
      user1Id: Mo,
      user2Id: Reina,
    },
    {
      id: '232323',
      type: 'request',
      user1Id: Ashwin,
      user2Id: Mo,
    },
    // {
    //   id: '343434',
    //   type: 'request',
    //   user1Id: Ashwin,
    //   user2Id: Reina,
    // },
    // {
    //   id: '454545',
    //   type: 'request',
    //   user1Id: Reina,
    //   user2Id: Ashwin,
    // },
  ]).then(r => storeResults('relationships', r));
};

module.exports.addLevels = () =>
  Levels.bulkCreate([
    {
      id: '1',
      name: 'basic',
    },
    {
      id: '2',
      name: 'intermediate',
    },
    {
      id: '3',
      name: 'advanced',
    },    
    {
      id: '4',
      name: 'fluent',
    },    
    {
      id: '5',
      name: 'native',
    },
  ]).then(r => storeResults('levels', r));

module.exports.addLanguages = () =>
  Languages.bulkCreate([
    { id: '1', name: 'English' },
    { id: '2', name: 'Spanish' },
    { id: '3', name: 'French' },
  ]).then(r => storeResults('languages', r));

module.exports.addLanguagesLevels = () =>
  LanguagesLevels.bulkCreate([
    // 0. English Beginner
    {
      language_id: '1',
      level_id: '1',
    },
    // 1. English Native
    {
      language_id: '1',
      level_id: '4',
    },
    // 2. Spanish Intermediate
    {
      language_id: '2',
      level_id: '2',
    },
    // 3. Spanish Expert
    {
      language_id: '2',
      level_id: '5',
    },
    // 4. French Beginner
    {
      language_id: '3',
      level_id: '1',
    },
    // 5. French Expert
    {
      language_id: '3',
      level_id: '5',
    },
  ]).then(r => storeResults('languagesLevels', r));

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

module.exports.addRooms = () =>
  Rooms.bulkCreate([
    { id: '3333', number_active_participants: 3 },
    { id: '5555', number_active_participants: 2 },
  ]).then(r => storeResults('rooms', r));

module.exports.addUsersRooms = (obj) =>
  // add everyone into 1 shared room
  Promise.all(obj.users.map(
    user => user.addRoom(obj.rooms[0])
  ))
  // add mo and reina into another room
  .then(() => obj.users[0].addRoom(obj.rooms[1]))
  .then(() => obj.users[1].addRoom(obj.rooms[1]))
  .then(() => obj);

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
    { body: 'Thats it, I\'m reporting you', room_id: room0, user_id: Reina },

    { body: 'Hi Mo', room_id: room1, user_id: Reina },
    { body: 'Hi Reina', room_id: room1, user_id: Mo },
    { body: 'Avalon?', room_id: room1, user_id: Reina },
    { body: 'No, too much work', room_id: room1, user_id: Mo },
    { body: 'Fine, one game', room_id: room1, user_id: Mo },
  ])
  .then(r => storeResults('messages', r));
};
