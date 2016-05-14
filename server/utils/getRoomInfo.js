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

exports.convertUserIdsToNames = (arrayOfUserIds) => {

  getUserInfo.bulk(arrayOfUserIds)
    .then((userArray) => {
      console.log('userArray.................', userArray);
      return userArray.map((user) => user.first_name + ' ' + user.last_name);
    })
    .then((result) => console.log('result..................', result))
};



const cycleThroughRooms = (roomObjs) =>
  Promise.all(roomObjs.map(roomObj => something(roomObj)));

exports.getRoomsInfo = (req, res, next) => {
  const selfId = req.idioma.profile.id;

  getRoomData(selfId)
  .then(cycleThroughRooms)
  .then(modifiedArray => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};