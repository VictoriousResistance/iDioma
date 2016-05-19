const Sequelize = require('sequelize');
const password = require('./config.js');

var db;

if (process.env.PORT) {
  db = new Sequelize('idioma', 'iDioma', password, {
    host: 'idioma-production.cxdvnhbvpuxn.us-west-2.rds.amazonaws.com',
  });
} else {
  db = new Sequelize('idioma', 'root', password);
}


module.exports = db;
