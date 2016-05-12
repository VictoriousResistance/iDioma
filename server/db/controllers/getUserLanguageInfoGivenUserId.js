const db = require('../db.js');
const languagesStore = require('../seed/languages.js').store;
const levelsStore = require('../seed/levels.js').store;

const getLanguagesLevelsIds = (userId) => {
  const query = `SELECT offer_or_learn, language_level_id FROM users_languages_levels WHERE user_id = '${userId}';`;
  return db.query(query)
    .spread((results, metadata) => results);
};

const getLanguagesLevels = (entries) => {
  return entries.map((entry) => {
      // console.log(entry)
      const query = `SELECT language_id, level_id FROM languages_levels WHERE id = '${entry.language_level_id}';`;
      return db.query(query)
        .spread((results, metadata) => results);
  });
};

module.exports = (userId) =>
  getLanguagesLevelsIds(userId)
  .then(getLanguagesLevels);
