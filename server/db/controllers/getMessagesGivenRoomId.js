const Messages = require('../models/messageModel.js');

const conformMessageObj = (messageObj) => {
  // set up message object structure
  var outputObj = {
    roomId: '',
    senderId: '',
    body: '',
    timestamp: '',
  };

  outputObj.roomId = messageObj.dataValues.room_id;
  outputObj.senderId = messageObj.dataValues.user_id;
  outputObj.body = messageObj.dataValues.body;
  outputObj.timestamp = messageObj.dataValues.createdAt;

  return outputObj;
};

const getMessagesGivenRoomId = (roomId) => {

  return Messages.findAll({ where: { room_id: roomId } })
    .then((messages) => {
      return messages.map((message) => conformMessageObj(message));
    })
    .then((result) => console.log('result..............', result))

};

module.exports = getMessagesGivenRoomId;

