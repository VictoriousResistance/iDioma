const db = require('../db.js');

module.exports = (self, offSet) => {
  const queryString = `SELECT UserLanguageLevel.User FROM UserLanguageLevel 
                         INNER JOIN LanguageLevel 
                           ON UserLanguageLevel.LanguageLevel = LanguageLevel.id
                         INNER JOIN Language
                           ON LanguageLevel.Language = Language.id
                         INNER JOIN Level
                           ON LanguageLevel.Level = Level.id
                         WHERE Language.name IN (${self.canTeach.map(language => language[0]).join(',')}) AND Level.name IN ('fluent', 'native')
                      `;
  // db.query();
};
