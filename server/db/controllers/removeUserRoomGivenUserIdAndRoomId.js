const db = require('../db.js');

module.exports = (userId, roomId) => {
  const findNumberActiveParticipantsQueryStr = `
    SELECT number_active_participants FROM rooms 
      WHERE id = '${roomId}'
  `;
  const removeRoomQueryStr = `
    DELETE FROM rooms 
      WHERE id = '${roomId}'
  `;
  const reduceNumberActiveParticipantsQueryStr = `
    UPDATE rooms 
      SET \`number_active_participants\` = \`number_active_participants\` - 1 
      WHERE id = '${roomId}'
  `;
  const removeUserRoomQueryStr = `
    DELETE from users_rooms 
      WHERE room_id = '${roomId}' AND user_id = '${userId}' 
  `;
  const deleteRelatedMessagesQueryStr = `
    DELETE from messages 
      WHERE room_id = '${roomId}'
  `;

  return db.query(findNumberActiveParticipantsQueryStr).spread(results => {
    if (results[0] == 1) { //need to figure out if it's results[0] or results[0]['number_active_participants']
      return db.query(removeUserRoomQueryStr)
               .spread(() => (
                  db.query(deleteRelatedMessagesQueryStr)
                ))
               .spread(() => (
                  db.query(removeRoomQueryStr)
                ))
               .spread(room => room);
    }
    return db.query(removeUserRoomQueryStr)
             .spread(() => (
                db.query(reduceNumberActiveParticipantsQueryStr)
              ))
             .spread(room => room);
  });
};
