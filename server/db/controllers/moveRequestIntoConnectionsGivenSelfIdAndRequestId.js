const db = require('../db.js');

module.exports = (selfId, requestId) => {
  const queryStr = `
                    UPDATE relationships 
                      SET type = 'connection' 
                      WHERE user1Id = '${requestId}' AND user2Id = '${selfId}'
                  `;
  return db.query(queryStr).spread((results, metadata) => results);
};
