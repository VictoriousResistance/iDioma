const Sequelize = require('sequelize');
const db = require('../db.js');

const UserRoom = db.define('UserRoom',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    show: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = UserRoom;
