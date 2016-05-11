const db = require('../db.js');
const Sequelize = require('sequelize');

module.exports = (self, offSet) => {
  const queryStr = `SELECT DISTINCT teach.teach_id FROM (
                      (
                        SELECT users_languages_levels.user AS teach_id FROM users_languages_levels 
                          INNER JOIN languages_levels 
                            ON users_languages_levels.languages_levels = languages_levels.id 
                          INNER JOIN languages 
                            ON languages_levels.language = languages.id 
                          INNER JOIN levels 
                            ON languages_levels.level = levels.id 
                          WHERE languages.name IN (${self.willLearn.map(language => language[0]).join(',')}) AND level.name IN ('fluent', 'native') 
                      ) AS teach 
                      INNER JOIN 
                      ( 
                        SELECT users_languages_levels.user AS learn_id FROM users_languages_levels 
                          INNER JOIN languages_levels 
                            ON users_languages_levels.languages_levels = languages_levels.id 
                          INNER JOIN languages 
                            ON languages_levels.language = languages.id 
                          INNER JOIN levels 
                            ON languages_levels.level = levels.id 
                          WHERE languages.name IN (${self.canTeach.map(language => language[0]).join(',')}) AND level.name IN ('basic', 'intermediate', 'advanced')
                      ) AS learn 
                        ON teach.teach_id = learn.learn_id 
                      ) 
                      LIMIT 20 
                      OFFSET ${offSet}
                    `;
  return db.query(queryStr, { type: Sequelize.QueryTypes.SELECT }); //not sure if 'Sequelize' should be an instance of sequelize or the db itself
};
