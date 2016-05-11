const Sequelize = require('sequelize');
const db = require('../db.js');

const Rooms = db.define('rooms',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    number_active_participants: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Rooms;
