const Messages = require('../models/messageModel.js');
const Rooms = require('../models/roomModel.js');
const UserRooms = require('../models/userRoomModel.js');


// Helper functions:

const createMessage = (userId, roomId, body) =>
  Messages.create({
    body,
    user_id: userId,
    room_id: roomId,
  });
// update the updatedAt field for the room after message posts
const updateRoom = (messageObj) =>
  Rooms.update(
    { updatedAt: messageObj.dataValues.updatedAt },
    { where: { id: messageObj.dataValues.room_id } }
  );
// update show field for each user in room to true to display the conversation with unread message
const updateAllUsersToShowRoom = (roomId) =>
  UserRooms.update(
    { show: true },
    { where: { room_id: roomId } }
  );


const postMessageGivenUserIdAndRoomId = (userId, roomId, body) =>
  createMessage(userId, roomId, body)
  .then(updateRoom)
  .then(() => updateAllUsersToShowRoom(roomId));

module.exports = postMessageGivenUserIdAndRoomId;
