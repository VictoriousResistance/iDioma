const db = require('../db.js');
const Rooms = require('../models/roomModel.js');
const UsersRooms = require('../models/userRoomModel.js');


module.exports = (user1Id, user2Id) => {
  const queryStr = `
                    SELECT ur_1.ur1_id FROM ( 
                      (
                        SELECT user_id AS user1_id, id AS ur1_id FROM users_rooms 
                          WHERE user_id = '${user1Id}' 
                      ) AS ur_1 
                      INNER JOIN 
                      (
                        SELECT user_id AS user2_id, id AS ur2_id FROM users_rooms 
                          WHERE user_id = '${user2Id}' 
                      ) AS ur_2 
                      ON ur_1.user1_id = ur_2.user2_id 
                    )
                    `;
  return db.query(queryStr).spread((results, metadata) => {
    if (results.length > 0) {
      return results;
    }
    return Rooms.create({
      number_active_participants: 2,
    })
    .then(room => (
      UsersRooms.bulkCreate([
        {
          user_id: user1Id,
          room_id: room.id,
        },
        {
          user_id: user2Id,
          room_id: room.id,
        },
      ])
      .then(() => (
        [room]
      ))
    ));
  });
};
