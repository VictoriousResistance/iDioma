const db = require('../db.js');
const Sequelize = require('sequelize');
const pluckMatches = require('./helpers.js').pluckMatches;
const getLanguages = require('./getUserLanguageInfoGivenUserId').bulk;

module.exports = (self, offSet) => {
  const queryStr = `SELECT DISTINCT teach.teach_id, teach.teach_url, teach.teach_first, teach.teach_last, teach.teach_description, teach.teach_facebook_id FROM (
                      (
                        SELECT users.id AS teach_id, users.photo_url AS teach_url, users.first_name AS teach_first, users.last_name AS teach_last, users.description AS teach_description, users.facebook_id as teach_facebook_id FROM users 
                          INNER JOIN users_languages_levels  
                            ON users_languages_levels.user_id = users.id
                          INNER JOIN languages_levels 
                            ON users_languages_levels.language_level_id = languages_levels.id 
                          INNER JOIN languages 
                            ON languages_levels.language_id = languages.id 
                          INNER JOIN levels 
                            ON languages_levels.level_id = levels.id 
                          WHERE languages.name IN ('${self.languages.willLearn.map(language => language[0]).join("', '")}') AND levels.name IN ('fluent', 'native') 
                      ) AS teach 
                      INNER JOIN 
                      ( 
                        SELECT users.id AS learn_id, users.photo_url AS learn_url, users.first_name AS learn_first, users.last_name AS learn_last, users.description AS learn_description, users.facebook_id as learn_facebook_id FROM users 
                          INNER JOIN users_languages_levels  
                            ON users_languages_levels.user_id = users.id
                          INNER JOIN languages_levels 
                            ON users_languages_levels.language_level_id = languages_levels.id 
                          INNER JOIN languages 
                            ON languages_levels.language_id = languages.id 
                          INNER JOIN levels 
                            ON languages_levels.level_id = levels.id 
                          WHERE languages.name IN ('${self.languages.canTeach.map(language => language[0]).join("', '")}') AND levels.name IN ('basic', 'intermediate', 'advanced')
                      ) AS learn 
                        ON teach.teach_id = learn.learn_id 
                      ) 
                      WHERE teach.teach_id NOT IN ('${self.id}') AND teach.teach_id NOT IN  
                        (SELECT * from ((
                          SELECT relationships.user1Id as userid FROM users 
                            INNER JOIN relationships 
                              ON users.id = relationships.user2Id 
                            WHERE users.id = '${self.id}'
                        )
                        UNION ALL
                        (
                          SELECT relationships.user2Id as userid FROM users 
                            INNER JOIN relationships 
                              ON users.id = relationships.user1Id 
                            WHERE users.id = '${self.id}'
                        )) AS relatedIds)
                      LIMIT 20 
                      OFFSET ${offSet}
                    `;
                    
  return db.query(queryStr, { type: Sequelize.QueryTypes.SELECT })
    .then(pluckMatches)
    .then(getLanguages);
};
