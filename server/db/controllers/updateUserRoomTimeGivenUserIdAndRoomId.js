const db = require('../db.js');

//this is used when a user is about to leave a room or close the tab (think of it as "last seen in this room")
module.exports = (userId, roomId) => {
  const queryStr = `
    UPDATE users_rooms 
      SET updatedAt = CURRENT_TIMESTAMP  
      WHERE room_id = '${roomId}' AND user_id = '${userId}' 
  `;
  return db.query(queryStr).spread(results => results);
};
