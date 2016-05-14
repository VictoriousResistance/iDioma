const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

const something = (roomObj) =>
  Promise.all(roomObj.users.map(id =>
    getBasicInfo(id)
  ))
  .then(helpers.pluckUsers)
  .then(arrayOfUsers => {
    roomObj.users = arrayOfUsers;
    return roomObj;
  });


const cycleThroughRooms = (roomObjs) =>
  Promise.all(roomObjs.map(roomObj => something(roomObj)));

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;

  getRoomData(selfId)
  .then(cycleThroughRooms)
  .then(modifiedArray => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};