const db = require('../db.js');

module.exports = (selfId, matchId) => {
  const queryStr = `
                    INSERT 
                      INTO relationships 
                      (type, user1Id, user2Id)
                      VALUES ('reject', '${selfId}', '${matchId}') 
                  `;
  return db.query(queryStr).spread((results, metadata) => results);
};
