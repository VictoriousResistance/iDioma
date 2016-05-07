var Sequelize = require('sequelize');
var db = require('../db.js');

var Message = db.define('Message',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    body: {
      type: Sequelize.STRING,
      field: 'message_body'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = Message;