const UserRooms = require('../models/userRoomModel.js');
const Rooms = require('../models/roomModel.js');

// Helper functions:
const findRoomsWithSelf = (selfId) => 
  UserRooms.findAll({ where: { user_id: selfId } })

const filterForHiddenAndReturnRoomIds = (userRoomObjs) => {
  const filteredResults = userRoomObjs.filter((userRoomObj) => userRoomObj.dataValues.show);
  const roomIds = filteredResults.map((userRoomObj) => userRoomObj.dataValues.room_id);
  return roomIds;
}

const decorateOutputObj = (outputObj, userRoomObj, selfId) => {
  // roomId
  outputObj.roomId = userRoomObj.dataValues.room_id;
  // add userId to outputObj array property, only if not equal to selfId
  if (userRoomObj.dataValues.user_id !== selfId) {
    outputObj.userIds.push(userRoomObj.dataValues.user_id);
  }
  // last time user left room
  if (userRoomObj.dataValues.user_id == selfId) {
    outputObj.lastSeen = userRoomObj.dataValues.updatedAt;
  }
};

const addRoomLastUpdated = (outputObj) => {
  return Rooms.findOne({ where: {id: outputObj.roomId} })
  .then((roomObj) => {
    outputObj.roomLastUpdated = roomObj.dataValues.updatedAt;
    return outputObj;
  });
}


const getRoomIdsAndUserIdsGivenSelfId = (selfId) => {
  console.log('input.............', selfId);
  // first find rooms that self is a participant
  findRoomsWithSelf(selfId)
    .then((userRoomObjs) => filterForHiddenAndReturnRoomIds(userRoomObjs))
    // then return information about those rooms
    .then((roomIdArray) => {
      
      // first query room table to sort by last updated
      const roomQueries = roomIdArray.map((roomId) => {
        return Rooms.findAll({ where: { id: roomId } });
      });
      // sort room array by last updated room
      return Promise.all(roomQueries)
        .then((roomArray) => {
          roomArray.sort((a, b) => {
            return b[0].dataValues.updatedAt - a[0].dataValues.updatedAt;
          });
          return roomArray;
        })
        // return array of roomIds
        .then((sortedRooms) => {
          const roomIds = sortedRooms.map((room) => room[0].dataValues.id);
          return roomIds;
        })
        // then map through room ids to set up userRoom query
        .then((sortedRoomIdArray) => {
          const userRoomQueries = sortedRoomIdArray.map((roomId) => {
            return UserRooms.findAll({ where: { room_id: roomId } });
          });

          return Promise.all(userRoomQueries);
        })
        // map through results array to create single object for a room
        .then((sortedUserRoomArray) => {

          const outputArray = [];
          
          sortedUserRoomArray.forEach(
            (userRoomSubarray) => {
              var outputObj = { roomId: '', userIds: [] };
              userRoomSubarray.forEach((singleUserRoom) => {
              // decorate output object using populateOutput function
                decorateOutputObj(outputObj, singleUserRoom, selfId);
              });
              outputArray.push(addRoomLastUpdated(outputObj))
                // .then((output) => output)
              // push outputObj to outputArray
            });
          
          return Promise.all(outputArray);

        });
    })
    .catch((error) => {
      console.log('ERROR: ', error);
    });
};


module.exports = getRoomIdsAndUserIdsGivenSelfId;
