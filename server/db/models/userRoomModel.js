var Sequelize = require('sequelize');
var db = require('../db.js');

var UserRoom = db.define('UserRoom',
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

module.exports = UserRoom;