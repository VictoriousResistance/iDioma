const db = require('../db.js');
const Rooms = require('../models/roomModel.js');
const UsersRooms = require('../models/userRoomModel.js');

const getExistingRoomsInCommon = (user1Id, user2Id) => { //user1 is the one trying to start a conversation
  const queryStr =
    `SELECT * FROM ( 
      (
        SELECT room_id AS ur1_id
          FROM users_rooms 
          WHERE user_id = '${user1Id}' 
      ) AS ur_1

      INNER JOIN
      
      (
        SELECT room_id AS ur2_id
          FROM users_rooms 
          WHERE user_id = '${user2Id}' 
      ) AS ur_2 
      ON ur_1.ur1_id = ur_2.ur2_id 
      
      INNER JOIN
      
      (
        SELECT * FROM rooms
        WHERE rooms.number_active_participants <= '2'
      ) AS all_rooms
      ON ur_1.ur1_id = all_rooms.id
    )`;

  return db.query(queryStr).spread((results, metadata) => results[0]); // should only ever be 1 room where those 2 people are exclusively chatting
};

const pluckRoom = roomResults =>
  roomResults.dataValues;

const createOrReturnRoomInCommon = (room, user1Id, user2Id) => {
  const updateRoomToBeVisibleForBothUsers = (roomId, userId) => {
    const query =
      `UPDATE users_rooms 
      SET \`show\` = true 
      WHERE room_id = '${roomId}' AND user_id = '${userId}'`;

    return db.query(query);
  };

  const createRoomWithBothUsers = (user1Id, user2Id) => {
    const addUsersToRoom = (room, user1Id, user2Id) =>
      UsersRooms.bulkCreate([
        {
          user_id: user1Id,
          room_id: room.id,
          show: true,
        },
        {
          user_id: user2Id,
          room_id: room.id,
          show: true,
        },
      ]).then(() => room);

    return Rooms.create({
      number_active_participants: 2,
    })
    .then(pluckRoom)
    .then(room => addUsersToRoom(room, user1Id, user2Id));
  };

  if (room) {
    return updateRoomToBeVisibleForBothUsers(room.id, user1Id)
      .then(() => room);
  } else {
    return createRoomWithBothUsers(user1Id, user2Id);
  }
};

module.exports = (user1Id, user2Id) =>
  // check if they already have a room in common (only when they are the only 2 or less people in the room)
  getExistingRoomsInCommon(user1Id, user2Id)
  .then(roomInCommon => createOrReturnRoomInCommon(roomInCommon, user1Id, user2Id));
