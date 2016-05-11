const Sequelize = require('sequelize');
const db = require('../db.js');

const Relationships = db.define('relationships',
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

module.exports = Relationships;
