var Room = require('../models/roomModel.js');
var Message = require('../models/messageModel.js');
var UserRoom = require('../models/userRoomModel.js');

module.exports = {
  getAllRooms: function (req, res) {
    Room.findAll()
      .then(function(rooms) {
        res.status(201).json(rooms);
      })
      .catch(function(error) {
	      res.sendStatus(404);
	      throw error;
    });
  },
  getAllLevels: function (req, res) {
    Message.findAll()
      .then(function(messages) {
        res.status(201).json(messages);
      })
      .catch(function(error) {
        res.sendStatus(404);
        throw error;
    });
  }
}