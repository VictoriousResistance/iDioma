const db = require('../db.js');

module.exports = (roomId) => {
  const query =
    `SELECT user_id, body, updatedAt 
    FROM messages 
    WHERE room_id = '${roomId}';`;

  return db.query(query)
    .spread((results, metadata) => results);
};

