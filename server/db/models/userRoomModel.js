const Sequelize = require('sequelize');
const db = require('../db.js');

const UsersRooms = db.define('users_rooms',
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

module.exports = UsersRooms;
