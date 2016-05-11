module.exports = (req, res, next) => {
  console.log('reached');
  const fbID = req.user.id;

  const db = require('../db/db.js');

  db.query(
    `SELECT *
    FROM users;`

  ).spread(function(results, metadata) {
  // Results will be an empty array and metadata will contain the number of affected rows.
  console.log(results);
  console.log(metadata);
  });

  next();
};