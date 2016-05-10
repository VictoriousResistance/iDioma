const Sequelize = require('sequelize');

module.exports = (self, offSet) => {
  const queryString = `SELECT user_id FROM UserLanguageLevel 
                         INNER JOIN LanguageLevel 
                           ON UserLanguageLevel.LanguageLevel = LanguageLevel.id
                         INNER JOIN Language
                           ON LanguageLevel.Language = Language.id
                         INNER JOIN Level
                           ON LanguageLevel.Level = Level.id
                         WHERE Language.name IN ${self.canTeach} AND Level.name IN ['fluent', 'native']`
  // sequelize.query();
};
