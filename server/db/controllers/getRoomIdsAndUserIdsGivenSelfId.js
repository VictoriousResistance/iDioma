const UserRoom = require('../models/userRoomModel.js');


const getRoomIdsAndUserIdsGivenSelfId = (selfId) => {
  UserRoom.findAll({ where: { userId: selfId } })
    .then(function (results) {
      console.log('results......', results);
    })
    
    .catch(function (error) {
      console.log('error........', error);
    });
  };



module.exports = getRoomIdsAndUserIdsGivenSelfId;