var Sequelize = require('sequelize');
var db = require('../db.js');

var UserLanguageLevel = db.define('UserLanguageLevel',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    // define only the attribute that is not inherited
    offerOrLearn: {
      type: Sequelize.STRING,
      field: 'type'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = UserLanguageLevel;