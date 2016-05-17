const db = require('../db.js');
const Rooms = require('../models/roomModel.js');
const UsersRooms = require('../models/userRoomModel.js');

const getMessagesForRoom = require('../controllers/getMessagesGivenRoomId.js');

const pluckRoom = roomResults => {
  roomResults.dataValues.messages = []; // no need to get room messages if it's a new room
  return roomResults.dataValues;
};

const createRoom = () =>
  Rooms.create({
    number_active_participants: 2,
  })
  .then(pluckRoom);

const updateRoomToBeVisible = (room, userId) => {
  const query =
    `UPDATE users_rooms 
    SET \`show\` = true 
    WHERE room_id = '${room.id}' AND user_id = '${userId}'`;

  return db.query(query)
    .then(() => room);
};

const getExistingRoomsInCommon = (user1Id, user2Id) => {
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

  return db.query(queryStr)
    .spread((results, metadata) => results[0]) // should only ever be 1 room where those 2 people are exclusively chatting
    .then(room =>
      room ?
      updateRoomToBeVisible(room.id, user1Id) :
      false
    );
};

const addUsersToRoom = (room, user1Id, user2Id) =>
  // if it has an messages array already, it's a new room
  room.messages ?
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
    ]).then(() => room) :
    room;

const createOrReturnRoomInCommon = (room) =>
  room ?
  room :
  createRoom();

const getMessages = (room) =>
  room.messages ?
  room :
  getMessagesForRoom(room.id)
  .then(messages => {
    room.messages = messages;
    return room;
  });

module.exports = (user1Id, user2Id) =>
  // check if they already have a room in common (only when they are the only 2 or less people in the room)
  getExistingRoomsInCommon(user1Id, user2Id)
  .then(createOrReturnRoomInCommon)
  .then(room => addUsersToRoom(room, user1Id, user2Id)) // no need to send back user data since client has it already
  .then(getMessages);
