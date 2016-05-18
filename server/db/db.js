const Sequelize = require('sequelize');
const password = require('./config.js');

const db = new Sequelize('idioma', 'iDioma', password, {
  host: 'idioma-production.cxdvnhbvpuxn.us-west-2.rds.amazonaws.com'
});

module.exports = db;
