const db = require('../db.js');
const Sequelize = require('sequelize');

module.exports = (self, offSet) => {
  const queryStr = `SELECT DISTINCT * FROM (
                      (
                        SELECT users.id AS teach_id, users.photo_url AS teach_url, users.first_name AS teach_first, users.last_name AS teach_last FROM users 
                          INNER JOIN users_languages_levels  
                            ON users_languages_levels.user_id = users.id
                          INNER JOIN languages_levels 
                            ON users_languages_levels.language_level_id = languages_levels.id 
                          INNER JOIN languages 
                            ON languages_levels.language_id = languages.id 
                          INNER JOIN levels 
                            ON languages_levels.level_id = levels.id 
                          WHERE languages.name IN ('${self.willLearn.map(language => language[0]).join("', '")}') AND levels.name IN ('fluent', 'native') 
                      ) AS teach 
                      INNER JOIN 
                      ( 
                        SELECT users.id AS learn_id, users.photo_url AS learn_url, users.first_name AS learn_first, users.last_name AS learn_last FROM users 
                          INNER JOIN users_languages_levels  
                            ON users_languages_levels.user_id = users.id
                          INNER JOIN languages_levels 
                            ON users_languages_levels.language_level_id = languages_levels.id 
                          INNER JOIN languages 
                            ON languages_levels.language_id = languages.id 
                          INNER JOIN levels 
                            ON languages_levels.level_id = levels.id 
                          WHERE languages.name IN ('${self.canTeach.map(language => language[0]).join("', '")}') AND levels.name IN ('basic', 'intermediate', 'advanced')
                      ) AS learn 
                        ON teach.teach_id = learn.learn_id 
                      ) 
                      LIMIT 20 
                      OFFSET ${offSet}
                    `;
  return db.query(queryStr, { type: Sequelize.QueryTypes.SELECT });
};
