const UserRooms = require('../models/userRoomModel.js');


const getRoomIdsAndUserIdsGivenSelfId = (selfId) => {
  // first find rooms that self is a participant
  return UserRooms.findAll({ where: { user_id: selfId } })
    .then(function (results) {
      const roomIds = results.map((userRoomObj) => userRoomObj.dataValues.room_id);
      return roomIds;
    })
    // then return information about those rooms
    .then(function(roomIdArray) {
      // const queryArray = roomIdArray.map((roomId) => { return {room_id: roomId} });

      const roomQueries = roomIdArray.map((roomId) => {
        return UserRooms.findAll({ where: {room_id: roomId} })
      })

      return Promise.all(roomQueries)
        .then(function(results) { 
          console.log('results.........', results);
        })
    })
    .catch(function (error) {
      console.log('ERROR: ', error);
    });
  };


module.exports = getRoomIdsAndUserIdsGivenSelfId;