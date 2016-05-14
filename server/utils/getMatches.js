const getMatches = require('../db/controllers/getMatchesGivenSelfAndOffset');

module.exports = (req, res, next) => {
  const self = req.idioma.profile;

  // set offset to 20 on req
  req.idioma.matches.offSet = 0;
  const offSet = req.idioma.matches.offSet;

  getMatches(self, offSet)
  .then((matches) => {
    req.idioma.matches.values = matches;
  })
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};
