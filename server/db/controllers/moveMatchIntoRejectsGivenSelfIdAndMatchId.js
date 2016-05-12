const db = require('../db.js');

module.exports = (selfId, connectionId) => {
  const queryStr = `
                    INSERT 
                      INTO relationships 
                      (type, user1Id, user2Id)
                      VALUES ('reject', '${selfId}', '${connectionId}') 
                  `;
  return db.query(queryStr).spread((results, metadata) => results);
};
