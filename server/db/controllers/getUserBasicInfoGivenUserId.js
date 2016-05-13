const db = require('../db.js');

const getBasicInfo = module.exports = (userId) =>
  db.query(`SELECT * FROM users WHERE id = '${userId}';`)
    .spread((results, metadata) => results);

module.exports.bulk = (userIds) =>
  Promise.all(userIds.map(
    userId => getBasicInfo(userId)
  ));
