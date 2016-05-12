const db = require('../db.js');
const languagesStore = require('../seed/languages.js').idToLanguage;
const levelsStore = require('../seed/levels.js').idToLevel;

const getLanguagesLevels = (userId, offerOrLearnArray) => {
  const queryMaker = (userId, offerOrLearn) =>
    `SELECT * 
    FROM users_languages_levels 
    INNER JOIN languages_levels 
    ON users_languages_levels.language_level_id = languages_levels.id 
    WHERE user_id = '${userId}' AND offer_or_learn = '${offerOrLearn}';`;

  const queries = offerOrLearnArray.map(offerOrLearnEntry =>
    queryMaker(userId, offerOrLearnEntry));

  return Promise.all(
    queries.map(
      query => db.query(query)
        .spread((results, metadata) => results)
    )
  );
};

module.exports = (userId) =>
  getLanguagesLevels(userId, ['offer', 'learn'])
  .then(results => results.map(offerOrLearn =>
    offerOrLearn.map(language_level =>
      [languagesStore[language_level.language_id], levelsStore[language_level.level_id]]
    )
  ));

