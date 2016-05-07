var Sequelize = require('sequelize');
var db = require('../db.js');

var Room = db.define('Room',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = Room;