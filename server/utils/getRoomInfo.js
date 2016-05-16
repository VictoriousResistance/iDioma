const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

const getUsersInfoForRoom = (roomObj) =>
  getBasicInfo.bulk(roomObj.users)
  .then(helpers.pluckUsers)
  .then(users => {
    roomObj.users = users;
    return roomObj;
  });

const getUsersInfoForRooms = (roomObjs) =>
  Promise.all(roomObjs.map(roomObj => getUsersInfoForRoom(roomObj)));

const addMessagesToRooms = (rooms) =>
  rooms.map(room => {
    room.messages = room.messages || [];
    return room;
  });

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;

  getRoomData(selfId)
  .then(getUsersInfoForRooms)
  .then(addMessagesToRooms)
  .then(modifiedArray => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};

