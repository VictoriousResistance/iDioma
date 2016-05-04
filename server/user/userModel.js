var Sequelize = require('sequelize');
var db = require('../db/db.js');

var User = db.define('User',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    facebookUserId: {
      type: Sequelize.STRING,
      field: 'google_user_id'
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name'
    },
    photoUrl: {
      type: Sequelize.STRING,
      field: 'photo_url'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = User;
