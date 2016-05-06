var Sequelize = require('sequelize');
var db = require('../db.js');

var UserLanguageLevel = db.define('UserLanguageLevel',
  {
    // define only the attribute that is not inhereted
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