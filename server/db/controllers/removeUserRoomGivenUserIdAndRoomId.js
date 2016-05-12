const db = require('../db.js');

module.exports = (userId, roomId) => {
  const findNumberActiveParticipantsQueryStr = `
    SELECT number_active_participants FROM rooms 
      WHERE id = '${roomId}'
  `;
  const removeUserRoomsQueryStr = `
    DELETE FROM users_rooms 
      WHERE room_id = '${roomId}'
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
  return db.query(findNumberActiveParticipantsQueryStr).spread(results => {
    if (results[0] == 1) {
      return db.query(removeUserRoomsQueryStr)
               .spread(() => (
                 db.query(removeRoomQueryStr)
                   .spread(room => room)
               ));
    }
    return db.query(reduceNumberActiveParticipantsQueryStr)
                  .spread(room => room);
  });
};
