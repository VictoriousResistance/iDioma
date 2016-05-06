var Sequelize = require('sequelize');
var db = require('../db.js');

var LanguageLevel = db.define('LanguageLevel',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = LanguageLevel;