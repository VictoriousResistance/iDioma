const Sequelize = require('sequelize');
const db = require('../db.js');

const UsersLanguagesLevels = db.define('users_languages_levels',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    offer_or_learn: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = UsersLanguagesLevels;
