const Sequelize = require('sequelize');
const db = require('../db.js');

const Relationship = db.define('Relationship',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Relationship;
