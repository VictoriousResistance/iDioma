module.exports = function() {
  var db = require('./db.js');
  var User = require('./models/userModel.js');
  var Language = require('./models/languageModel.js');
  var Level = require('./models/levelModel.js');
  var LanguageLevel = require('./models/languageLevelModel.js');
  var UserLanguageLevel = require('./models/userLanguageLevelModel.js');

  Language.belongsToMany(Level, {through: 'LanguageLevel'});
  Level.belongsToMany(Language, {through: 'LanguageLevel'});

  User.belongsToMany(LanguageLevel, {through: 'UserLanguageLevel'});
  LanguageLevel.belongsToMany(User, {through: 'UserLanguageLevel'});

  db.sync({force: true});
};
