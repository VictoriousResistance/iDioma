const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getUserInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const inspect = require('../db/controllers/helpers.js').inspect;

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

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;

  getRoomData(selfId)
  // .then(inspect)
  .then(Promise.all((roomArray) =>
    roomArray.map((room) => {
      console.log(room);
      modifyOutputObj(room);
    })
  ))
  // .then(inspect)
  .then((modifiedArray) => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.sendStatus(404);
  });
};