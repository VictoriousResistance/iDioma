const db = require('../db.js');
const languageToId = require('../seed/languages.js').languageToId;
const levelToId = require('../seed/levels.js').levelToId;
const LanguagesLevels = require('../models/languageLevelModel.js');
const Users = require('../models/userModel.js');

module.exports = (type, userId, languageLevels) => ( // languageLevels is an array of tuples in the form of [language, level]
  db.query(`
    DELETE FROM users_languages_levels 
      WHERE user_id = '${userId}' AND offer_or_learn = '${type}'
  `) // delete existing associations between user and any languageLevels
  .spread(() => Users.findById(userId))
  .then(user => {
    const languageLevelQueries = languageLevels.map(languageLevel => (
      LanguagesLevels.findOrCreate({
        where: {
          language_id: languageToId[languageLevel[0]],
          level_id: levelToId[languageLevel[1]],
        },
      })
      .spread(result => result) // each result is an instance of the LanguagesLevels sequelize model
    ));
    return Promise.all(languageLevelQueries)
      .then(lls => {
        const addQueries = lls.map(ll => (
          user.addLanguages_level(ll, { offer_or_learn: type })
        ));
        return Promise.all(addQueries);
      });
  })
);
