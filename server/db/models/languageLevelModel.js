const Sequelize = require('sequelize');
const db = require('../db.js');

const LanguageLevel = db.define('LanguageLevel',
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

module.exports = LanguageLevel;
