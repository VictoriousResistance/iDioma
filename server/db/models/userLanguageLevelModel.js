const Sequelize = require('sequelize');
const db = require('../db.js');

const UserLanguageLevel = db.define('UserLanguageLevel',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    offerOrLearn: {
      type: Sequelize.STRING,
      field: 'type',
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = UserLanguageLevel;
