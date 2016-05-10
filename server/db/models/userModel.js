const Sequelize = require('sequelize');
const db = require('../db.js');

const User = db.define('User',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    facebookId: {
      type: Sequelize.STRING,
      field: 'facebook_id',
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name',
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name',
    },
    photoUrl: {
      type: Sequelize.STRING,
      field: 'photo_url',
    },
    userDescription: {
      type: Sequelize.STRING(256),
      field: 'user_description',
    },
    // would like to add counter cache for request count and connection count
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
