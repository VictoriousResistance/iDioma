const db = require('../db.js');

module.exports = (facebookId) => {
  const query = `SELECT * FROM users WHERE facebook_id = '${facebookId}'`;
  return db.query(query)
    .spread((results, metadata) => results[0]);
};
