var User = require('../models/userModel.js');
var Language = require('../models/languageModel.js');
var Level = require('../models/levelModel.js');
var LanguageLevel = require('../models/languageLevelModel.js');
var UserLanguageLevel = require('../models/userLanguageLevelModel.js');

module.exports = {
  getAllLanguages: function (req, res) {
    Language.findAll()
      .then(function(languages) {
        res.status(201).json(languages);
      })
      .catch(function(error) {
	      res.sendStatus(404);
	      throw error;
    });
  },
  getAllLevels: function (req, res) {
    Level.findAll()
      .then(function(levels) {
        res.status(201).json(levels);
      })
      .catch(function(error) {
        res.sendStatus(404);
        throw error;
    });
  }
}
