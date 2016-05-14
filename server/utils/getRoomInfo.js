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
  .then((roomArray) => {
    roomArray.forEach((room) => modifyOutputObj(room));
    next();
  })
  .catch((error) => {
    res.sendStatus(404);
  });
};