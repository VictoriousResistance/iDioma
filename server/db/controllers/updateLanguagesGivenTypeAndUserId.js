const db = require('../db.js');
const languageToId = require('../seed/languages.js').languageToId;
const levelToId = require('../seed/levels.js').levelToId;

module.exports = (type, userId, languageLevels) => { //languageLevels is an array of tuples in the form of [language, level]
  //find if that language_level already exists
  const languageLevelQueries = languageLevels.map(languageLevel => (
    db.query(`
      SELECT id FROM languages_levels 
        WHERE language_id = '${languageToId[languageLevel[0]]}' AND level_id = '${levelToId[languageLevel[1]]}'
    `)
  ));

  Promise.all(languageLevelQueries)
    .then( languageLevelIds => {
      
    })


};
