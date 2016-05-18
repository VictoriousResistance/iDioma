const db = require('../db.js');

module.exports = (userId, roomId) => {

  // const findNumberActiveParticipantsQueryStr = `
  //   SELECT number_active_participants FROM rooms 
  //     WHERE id = '${roomId}'
  // `;

  // const removeRoomQueryStr = `
  //   DELETE FROM rooms 
  //     WHERE id = '${roomId}'
  // `;

  const decrementNumberActiveParticipantsQueryStr = `
    UPDATE rooms 
      SET \`number_active_participants\` = \`number_active_participants\` - 1 
      WHERE id = '${roomId}'
  `;

   // TODO: Allow users to delete themselves from a room
  // const removeUserRoomQueryStr = ` 
  //   DELETE from users_rooms
  //     WHERE room_id = '${roomId}' AND user_id = '${userId}'
  // `;

  // const deleteRelatedMessagesQueryStr = `
  //   DELETE from messages 
  //     WHERE room_id = '${roomId}'
  // `;

  const deleteEmptyRoomsQueryString = `
    DELETE from rooms
      WHERE number_active_participants = 0
  `;

  const deleteMsgsInEmptyRoomsQueryString = `
    DELETE from messages
      WHERE room_id IS NULL
  `;

  return db.query(decrementNumberActiveParticipantsQueryStr)
    .then(db.query(deleteEmptyRoomsQueryString))
    .then(db.query(deleteMsgsInEmptyRoomsQueryString));
};
