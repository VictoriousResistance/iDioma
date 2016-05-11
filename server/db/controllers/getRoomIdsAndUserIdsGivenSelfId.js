const UserRoom = require('../models/userRoomModel.js');


const getRoomIdsAndUserIdsGivenSelfId = (selfId) => {
  UserRoom.findAll({ where: { userId: selfId } })
    .then(function (results) {
      const roomIds = results.map((userRoom) => userRoom.dataValues.roomId);
    })
    .catch(function (error) {
      console.log('ERROR: ', error);
    });
  };


module.exports = getRoomIdsAndUserIdsGivenSelfId;