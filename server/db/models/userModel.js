const Sequelize = require('sequelize');
const db = require('../db.js');

const Users = db.define('users',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    facebook_id: {
      type: Sequelize.STRING,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    photo_url: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING(256),
    },
    // would like to add counter cache for request count and connection count
  },
  {
    freezeTableName: true,
  }
);

module.exports = Users;
