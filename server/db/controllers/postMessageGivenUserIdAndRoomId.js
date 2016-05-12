const Messages = require('../models/messageModel.js');

module.exports = (userId, roomId, body) => (
  Messages.create({
    body,
    user_id: userId,
    room_id: roomId,
  })
);
