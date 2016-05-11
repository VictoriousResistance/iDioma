const Sequelize = require('sequelize');
const db = require('../db.js');

const LanguagesLevels = db.define('languages_levels',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = LanguagesLevels;
