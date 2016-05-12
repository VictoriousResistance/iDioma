const db = require('../db.js');

module.exports = (selfId, connectionId) => {
  const queryStr = `
                    UPDATE relationships 
                      SET type = 'reject' 
                      WHERE (user1Id = '${selfId}' AND user2Id = '${connectionId}')
                      OR (user2Id = '${selfId}' AND user1Id = '${connectionId}')
                  `;
  return db.query(queryStr).spread((results, metadata) => results);
};
