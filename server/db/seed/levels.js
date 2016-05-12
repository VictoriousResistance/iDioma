const db = require('../db.js');
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
    const levelsStore = module.exports.store = {};
    levels.forEach(function(level) { levelsStore[level.dataValues.id] = level.dataValues.name; });
    return levelsStore;
  });

