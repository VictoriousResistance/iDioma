const UserRooms = require('../models/userRoomModel.js');
const Rooms = require('../models/roomModel.js');

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
  // get an array of arrays -- array of users inside each room (each room is in the master array)
  Promise.all(rooms.map(room =>
    UserRooms.findAll({
      where: {
        room_id: room.id,
        user_id: {
          $ne: selfId,
        },
      },
    })
  ))
  // go through the array of arrays and turn the returned UserRooms object into just user ids
  .then(usersInRooms => usersInRooms.map(usersInRoom =>
    usersInRoom.map(user =>
      user.dataValues.user_id
    )
  ))
  //assign the returned arrays to the corresponding rooms and return the rooms
  .then(usersInRooms => usersInRooms.map((usersInRoom, i) => {
    rooms[i].users = usersInRoom;
    return rooms[i];
  }));

module.exports = (selfId) => {
  // find rooms that self is a participant
  return findSortedRoomsWithSelf(selfId)
    .then(getRoomIds)
    // return information about those rooms
    .then(getRoomsInfo)
    .then(pluckRooms)

      // sort tables by last updated - unnecessary because of SQL query
    // .then(sortRooms)

    // get the ids of users associated with each room (but don't get own id)
    .then(rooms => getUsersInRooms(rooms, selfId))
    .catch((error) => {
      console.log('ERROR: ', error);
    });
};

