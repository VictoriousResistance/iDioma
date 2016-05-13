const db = require('../db.js');
const Rooms = require('../models/roomModel.js');
const UsersRooms = require('../models/userRoomModel.js');


module.exports = (user1Id, user2Id) => { //user1 is the one trying to start a conversation
  const queryStr = `
                    SELECT ur_1.ur1_id FROM ( 
                      (
                        SELECT user_id AS user1_id, room_id AS ur1_id FROM users_rooms 
                          WHERE user_id = '${user1Id}' 
                      ) AS ur_1 
                      INNER JOIN 
                      (
                        SELECT user_id AS user2_id, room_id AS ur2_id FROM users_rooms 
                          WHERE user_id = '${user2Id}' 
                      ) AS ur_2 
                      ON ur_1.ur1_id = ur_2.ur2_id 
                    )
                    `; //checks whether or not they already have a room in common

  return db.query(queryStr).spread((results) => {
    if (results.length > 0) {
      return db.query(
        `UPDATE users_rooms 
          SET \`show\` = true 
          WHERE room_id = '${results[0].id}' AND user_id = '${user1Id}'
        `
      )
      .spread(data => data);
    }
    return Rooms.create({
      number_active_participants: 2,
    })
    .then(room => (
      UsersRooms.bulkCreate([
        {
          user_id: user1Id,
          room_id: room.id,
          show: true,
        },
        {
          user_id: user2Id,
          room_id: room.id,
          show: true,
        },
      ])
      .then(() => (
        [room]
      ))
    ));
  });
};
