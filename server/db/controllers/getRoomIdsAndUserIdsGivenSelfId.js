const UserRooms = require('../models/userRoomModel.js');
const Rooms = require('../models/roomModel.js');
const inspect = require('./helpers.js').inspect;

// Helper functions:
const findSortedRoomsWithSelf = (selfId) =>
  UserRooms.findAll({
    where: {
      user_id: selfId,
      show: true,
    },
    order: [['updatedAt', 'DESC']],
  });

const getRoomIds = (userRoomObjs) =>
  userRoomObjs.map(userRoomObj =>
    userRoomObj.dataValues.room_id
  );

const getRoomsInfo = (roomIds) =>
  Promise.all(roomIds.map(roomId =>
    Rooms.findAll({
      where: { id: roomId },
    })
  ));

const pluckRooms = (rooms) =>
  rooms.map(room => room[0].dataValues);

// const sortRooms = (roomArray) =>
//   roomArray.sort((a, b) =>
//     a.updatedAt - b.updatedAt
//   );

const getUsersInRooms = (rooms, selfId) =>
  Promise.all(rooms.map(roomId =>
    UserRooms.findAll({
      where: { 
        room_id: roomId,
        user_id: {
          $ne: selfId
        },
      }
    })
  ));

const decorateOutputObj = (outputObj, userRoomObj, selfId) => {
  // roomId
  outputObj.roomId = userRoomObj.dataValues.room_id;
  // add userId to outputObj array property, only if not equal to selfId
  if (userRoomObj.dataValues.user_id !== selfId) {
    outputObj.users.push(userRoomObj.dataValues.user_id);
  }
  // last time user left room
  if (userRoomObj.dataValues.user_id == selfId) {
    outputObj.lastSeen = userRoomObj.dataValues.updatedAt;
  }
};

const addRoomLastUpdated = (outputObj) => {
  return Rooms.findOne({ where: { id: outputObj.roomId } })
  .then((roomObj) => {
    outputObj.roomLastUpdated = roomObj.dataValues.updatedAt;
    return outputObj;
  });
};

module.exports = (selfId) => {
  // find rooms that self is a participant
  return findSortedRoomsWithSelf(selfId)
    .then(getRoomIds)
    // return information about those rooms
    .then(getRoomsInfo)
    .then(pluckRooms)
      // sort tables by last updated - unnecessary because of SQL query
    // .then(sortRooms)
    .then(inspect)
    // get the ids of users associated with each room (but don't get own id)
    .then(rooms => getUsersInRooms(rooms, selfId))
    .then(inspect)

    //     // then map through room ids to set up userRoom query
    //     .then((sortedRoomIdArray) => {
    //       const userRoomQueries = sortedRoomIdArray.map((roomId) => {
    //         return UserRooms.findAll({ where: { room_id: roomId } });
    //       });

    //       return Promise.all(userRoomQueries);
    //     })
    //     // map through results array to create single object for a room
    //     .then((sortedUserRoomArray) => {

    //       const outputArray = [];
          
    //       sortedUserRoomArray.forEach(
    //         (userRoomSubarray) => {
    //           var outputObj = { roomId: '', users: [] };
    //           userRoomSubarray.forEach((singleUserRoom) => {
    //           // decorate output object using populateOutput function
    //             decorateOutputObj(outputObj, singleUserRoom, selfId);
    //           });
    //           outputArray.push(addRoomLastUpdated(outputObj))
    //             // .then((output) => output)
    //           // push outputObj to outputArray
    //         });
    //       return Promise.all(outputArray);

    //     });
    // })
    .catch((error) => {
      console.log('ERROR: ', error);
    });
};

