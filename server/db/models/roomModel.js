const Sequelize = require('sequelize');
const db = require('../db.js');

const Room = db.define('Room',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    numberActiveParticipants: {
      type: Sequelize.INTEGER,
      field: 'number_active_participants',
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Room;
