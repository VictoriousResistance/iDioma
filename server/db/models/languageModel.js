var Sequelize = require('sequelize');
var db = require('../db.js');

var Language = db.define('Language',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    languageName: {
      type: Sequelize.STRING,
      field: 'language_name'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = Language;