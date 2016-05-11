const db = require('../db.js');

module.exports = (facebookID) => {
  const query = `SELECT * FROM users WHERE facebook_id = ${facebookID}`;
  return db.query(query)
    .spread((results, metadata) => results);
};

