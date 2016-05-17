const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const getMessagesForRoom = require('../db/controllers/getMessagesGivenRoomId.js'); // TODO: get only the current room's messages?
const helpers = require('../db/controllers/helpers.js');

const hashUsers = (arrayOfUsers, self) => {
  const usersIncludingSelf = {};
  usersIncludingSelf[self.id] = self;

  return arrayOfUsers.reduce((cum, curr) => {
    cum[curr.id] = curr;
    return cum;
  }
  , usersIncludingSelf);
};

const getUsersInfoForRoom = (roomObj, self) =>
  getBasicInfo.bulk(roomObj.users)
  .then(helpers.pluckUsers)
  .then(users => {
    roomObj.users = users; // TODO: need this? maybe just put keys in array to save duplicated space
    return users;
  })
  .then(users => hashUsers(users, self))
  .then(hashedUsers => {
    roomObj.usersKey = hashedUsers;
    return roomObj;
  });

const getUsersInfoForRooms = (roomObjs, self) =>
  Promise.all(roomObjs.map(roomObj => getUsersInfoForRoom(roomObj, self)));

const addMessagesToRooms = (rooms) =>
  getMessagesForRoom.bulk(rooms);


module.exports = (req, res, next) => {
  const self = req.idioma.profile;

  getRoomData(self.id)
  .then(helpers.inspect)
  .then(rooms => getUsersInfoForRooms(rooms, self))
  .then(addMessagesToRooms)
  .then(modifiedArray => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};

