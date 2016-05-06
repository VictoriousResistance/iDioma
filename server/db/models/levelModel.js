var Sequelize = require('sequelize');
var db = require('../db.js');

var Level = db.define('Level',
  {
    levelId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    level: {
      type: Sequelize.STRING,
      field: 'level'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = Level;