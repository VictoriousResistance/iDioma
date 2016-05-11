const Sequelize = require('sequelize');
const db = require('../db.js');

const Messages = db.define('messages',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    body: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Messages;
