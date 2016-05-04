var Sequelize = require('sequelize');
var password = require('./config.js');

var db = new Sequelize('idioma', 'root', password);

module.exports = db;