const UserRooms = require('../models/userRoomModel.js');
const Rooms = require('../models/roomModel.js');


const getRoomIdsAndUserIdsGivenSelfId = (selfId) => {
  // first find rooms that self is a participant
  return UserRooms.findAll({ where: { user_id: selfId } })
    .then(function (results) {
      const roomIds = results.map((userRoomObj) => userRoomObj.dataValues.room_id);
      return roomIds;
    })
    // then return information about those rooms
    .then(function(roomIdArray) {
      // first query room table to sort by last updated
      const roomQueries = roomIdArray.map((roomId) => {
        return Rooms.findAll({ where: {id: roomId} })
      });
      // sort room array by last updated room
      return Promise.all(roomQueries)
        .then(function(roomArray) {
            roomArray.sort(function (a, b){
              return b[0].dataValues.updatedAt - a[0].dataValues.updatedAt;
            });
            return roomArray;
        })
        // return array of roomIds
        .then(function(sortedRooms) {
          const roomIds = sortedRooms.map((room) => room[0].dataValues.id);
          return roomIds;
        })
        // then map through room ids to set up userRoom query
        .then(function(sortedRoomIdArray) {
          const userRoomQueries = sortedRoomIdArray.map((roomId) => {
          return UserRooms.findAll({ where: {room_id: roomId} })
          });

          return Promise.all(userRoomQueries)
        })
        // map through results array to create single object for a room
        .then(function(sortedUserRoomArray) {
          console.log('input................', sortedUserRoomArray);
          const outputArray = []
          const outputObj = {roomId: '', userIds: []}

          const populateOutput = function(userRoomObj) {
            outputObj.roomId = userRoomObj.dataValues.room_id;
            outputObj.userIds.push(userRoomObj.dataValues.user_id);
          }

          sortedUserRoomArray.forEach(
            function(userRoomSubarray) {
              userRoomSubarray.forEach(function(singleUserRoom) {
              // decorate output object using populateOutput function
                populateOutput(singleUserRoom);
                console.log('outputInForEach................', outputObj);
              })
            // push outputObj to outputArray
            outputArray.push(outputObj) 
            // reset outputObj
            outputObj = {roomId: '', userIds: []}
          })

          console.log('output................', outputArray);
        })
    })
    .catch(function (error) {
      console.log('ERROR: ', error);
    });
  };


module.exports = getRoomIdsAndUserIdsGivenSelfId;