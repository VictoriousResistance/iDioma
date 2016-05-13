const getRoomData = require('../db/controllers/getRoomIdsAndUserIdsGivenSelfId.js');
const getUserInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;
 
  getRoomData(selfId)
  .then((rooms) => {
    req.idioma.rooms = rooms;
    next();
  })
  .catch((error) => {
    res.sendStatus(404);
  });
};