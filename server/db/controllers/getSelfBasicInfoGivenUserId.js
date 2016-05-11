const db = require('../db.js');

module.exports = (userId) => {
  const query = `SELECT * FROM users WHERE user_id = ${userId}`;
  return db.query(query)
    .spread((results, metadata) => results);
};

