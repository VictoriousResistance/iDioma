const db = require('../db.js');
const Rooms = require('../models/roomModel.js');
const UsersRooms = require('../models/userRoomModel.js');

const inspect = require('../controllers/helpers.js').inspect;


module.exports = (user1Id, user2Id) => { //user1 is the one trying to start a conversation
  const queryStr =
  `SELECT id FROM ( 
    (
      SELECT room_id AS ur1_id
        FROM users_rooms 
        WHERE user_id = '12345' 
    ) AS ur_1

    INNER JOIN
    
    (
      SELECT room_id AS ur2_id
        FROM users_rooms 
        WHERE user_id = '678910' 
    ) AS ur_2 
    ON ur_1.ur1_id = ur_2.ur2_id 
    
    INNER JOIN
    
    (
      SELECT * FROM rooms
      WHERE rooms.number_active_participants <= '2'
    ) AS all_rooms
    ON ur_1.ur1_id = all_rooms.id
  )`; // checks whether or not they already have a room in common (only when they are the only 2 or less people in the room)

  return db.query(queryStr)
    .spread((results, metadata) => results)
    //  {
    // if (results.length > 0) {
    //   return db.query(
    //     `UPDATE users_rooms 
    //       SET \`show\` = true 
    //       WHERE room_id = '${results[0].id}' AND user_id = '${user1Id}'
    //     `
    //   )
      .then(inspect)
      // .spread(data => data);
  //   }
  //   return Rooms.create({
  //     number_active_participants: 2,
  //   })
  //   .then(room => (
  //     UsersRooms.bulkCreate([
  //       {
  //         user_id: user1Id,
  //         room_id: room.id,
  //         show: true,
  //       },
  //       {
  //         user_id: user2Id,
  //         room_id: room.id,
  //         show: true,
  //       },
  //     ])
  //     .then(() => (
  //       [room]
  //     ))
  //   ));
  // });
};
