const db = require('../db.js');

module.exports = (userId, roomId) => {
  const hideUserRoomQueryStr = `
    UPDATE users_rooms 
      SET \`show\` = false 
      WHERE user_id = '${userId}' AND room_id = '${roomId}'
  `;

  return db.query(hideUserRoomQueryStr)
           .spread(results => results);
};
