const db = require('../db.js');
module.exports = (userId, body) => {
  const queryStr = `
    UPDATE users 
      SET description = '${body}' 
      WHERE id = '${userId}'
  `;
  return db.query(queryStr).spread(results => results);
};
