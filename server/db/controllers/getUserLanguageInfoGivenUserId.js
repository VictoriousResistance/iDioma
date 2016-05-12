const db = require('../db.js');

const getLanguagesLevels = (userId) => {
  const query = `SELECT offer_or_learn, language_level_id FROM users_languages_levels WHERE user_id = '${userId}'`;
  return db.query(query)
    .spread((results, metadata) => results);
};

module.exports = (userId) =>
  getLanguagesLevels(userId)
    .then(r => console.log(r));

