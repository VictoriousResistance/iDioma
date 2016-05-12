const Levels = require('../models/levelModel.js');

module.exports.seed = () =>
  Levels.bulkCreate([
    {
      id: 1,
      name: 'Beginner',
    },
    {
      id: 2,
      name: 'Intermerdiate',
    },
    {
      id: 3,
      name: 'Expert',
    },
  ])
  .then((levels) => {
    const idToLevel = module.exports.idToLevel = {};
    levels.forEach(function(level) { idToLevel[level.dataValues.id] = level.dataValues.name; });
    return idToLevel;
  });

