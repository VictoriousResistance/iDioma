var Sequelize = require('sequelize');
var db = require('../db.js');

var Level = db.define('Level',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    levelName: {
      type: Sequelize.STRING,
      field: 'level_name'
    }
  }, 
  {
    freezeTableName: true
  }
);

module.exports = Level;