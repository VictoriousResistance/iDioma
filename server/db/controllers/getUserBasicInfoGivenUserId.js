const db = require('../db.js');

const getBasicInfo = module.exports = (userId) =>
  db.query(`SELECT * FROM users WHERE id = '${userId}'`)
    .spread((results, metadata) => results[0]);

module.exports.bulk = (userIds) =>
  Promise.all(userIds.map(
    userId => getBasicInfo(userId)
  ));
