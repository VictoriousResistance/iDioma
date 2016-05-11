const getMatches = require('../db/controllers/getMatchesGivenSelfAndOffset');

module.exports = (req, res, next) => {
  const self = req.idioma.profile;
  const offSet = req.idioma.offSet; //need to agree on where to put offSet property in the state object
  getMatches(self, offSet)
  .then((matches) => {
    req.idioma.matches = matches;
    next();
  })
  .catch((error) => {
    res.sendStatus(404);
  });
};
