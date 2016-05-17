const Messages = require('../models/messageModel.js');

const pluckMessage = (messageObj) =>
  ({
    roomId: messageObj.dataValues.room_id,
    senderId: messageObj.dataValues.user_id,
    body: messageObj.dataValues.body,
    timestamp: messageObj.dataValues.createdAt,
  });

const getMessagesGivenRoomId = module.exports = (roomId) =>
  Messages.findAll({ where: { room_id: roomId } })
  .then(messages => messages.map(message =>
    pluckMessage(message))
  );

module.exports.bulk = arrayOfRoomObjs =>
  Promise.all(arrayOfRoomObjs.map(room =>
    getMessagesGivenRoomId(room.id).then(messages => {
      room.messages = messages;
      return room;
    })
  ));
