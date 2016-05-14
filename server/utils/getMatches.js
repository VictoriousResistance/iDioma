const getMatches = require('../db/controllers/getMatchesGivenSelfAndOffset');

module.exports = (req, res, next) => {
  const self = req.idioma.profile;

  getMatches(self, 0)
  .then((matches) => {
    req.idioma.matches.values = matches;
    req.idioma.matches.offset = 20;
  })
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};
