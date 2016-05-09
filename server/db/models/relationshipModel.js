var Sequelize = require('sequelize');
var db = require('../db.js');

var Relationship = db.define('Relationship',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    type: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Relationship;
