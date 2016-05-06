module.exports = function() {
  var db = require('./db.js');
  var User = require('./models/userModel.js');
  var Language = require('./models/languageModel.js');
  var Level = require('./models/levelModel.js');
  var UserLanguageLevel = require('./models/userLanguageLevelModel.js');

  Language.belongsToMany(Level, {through: 'UserLanguageLevel'});
  Level.belongsToMany(Language, {through: 'UserLanguageLevel'});

  db.sync({force: true});
};
