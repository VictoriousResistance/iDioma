const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

const convertUserIdsToNames = (arrayOfUserIds) => {
  console.log('reached')
  return getUserInfo.bulk(arrayOfUserIds)
    .then((userArray) => {
      console.log(userArray);
      return userArray.map((user) => user.first_name + ' ' + user.last_name);
    });
};

const modifyOutputObj = (inputObj) => {
  inputObj.users = convertUserIdsToNames(inputObj.users);
};

const something = (roomObj) =>
  Promise.all(roomObj.users.map(id =>
    getBasicInfo(id)
  ))
  .then(helpers.pluckUsers)
  .then(arrayOfUsers => {
    roomObj.users = arrayOfUsers;
    return roomObj;
  });


const cycleThroughRooms = (roomObjs) => {
  Promise.all(roomObjs.map(roomObj => something(roomObj)))
  .then(helpers.inspect);
};

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;

  getRoomData(selfId)
  .then(helpers.inspect)
  .then(cycleThroughRooms)
  .then(helpers.inspect)


  // // .then(helpers.pluckUsers)
  // // .then(helpers.inspect)
  // .then(modifiedArray => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};