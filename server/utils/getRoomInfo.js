const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getUserInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');

const convertUserIdsToNames = (arrayOfUserIds) => {
	return getUserInfo.bulk(arrayOfUserIds)
		.then((userArray) => userArray.map((user) => user.first_name + ' ' + user.last_name));
};

const modifyOutputObj = (inputObj) => {
  inputObj.users = convertUserIdsToNames(inputObj.users);
};

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;
 
  getRoomData(selfId)
  .then((roomArray) =>
    roomArray.map((room) => modifyOutputObj(room))
  )
  .then((modifiedArray) => req.idioma.rooms = modifiedArray)
  .then(() => next())
  .catch((error) => {
    res.sendStatus(404);
  });
};