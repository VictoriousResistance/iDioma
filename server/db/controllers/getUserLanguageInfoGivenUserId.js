const db = require('../db.js');
const languagesStore = require('../seed/languages.js').idToLanguage;
const levelsStore = require('../seed/levels.js').idToLevel;
const helpers = require('./helpers.js');

const getLanguagesLevels = (userId, offerOrLearnArray) => {
  const queryMaker = (userId, offerOrLearn) =>
    `SELECT * FROM
    users_languages_levels 
      INNER JOIN
    languages_levels 
      ON users_languages_levels.language_level_id = languages_levels.id 
    WHERE user_id = '${userId}' AND offer_or_learn = '${offerOrLearn}'`;

  const queries = offerOrLearnArray.map(offerOrLearnEntry =>
    queryMaker(userId, offerOrLearnEntry));

  return Promise.all(
    queries.map(
      query => db.query(query)
        .spread((results, metadata) => results)
    )
  );
};

const userLanguageInfo = module.exports = (userId) => {
  return getLanguagesLevels(userId, ['offer', 'learn'])   // can add more elements in the array if we ever add more fields
  .then(results => results.map(offerOrLearn =>
    offerOrLearn.map(language_level =>
      [languagesStore[language_level.language_id], levelsStore[language_level.level_id]]
    )
  ));
};

module.exports.bulk = (arrayOfUserObjs) =>
  Promise.all(arrayOfUserObjs.map(user => {
    return userLanguageInfo(user.id).then(result => {
      user.languages = helpers.pluckLanguages(result);
      return user;
    });
  }));
