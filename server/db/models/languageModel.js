const Sequelize = require('sequelize');
const db = require('../db.js');

const Languages = db.define('languages',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      defaultValue: 'English',
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Languages;
