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
    const levelToId = module.exports.levelToId = {};
    levels.forEach((level) => { 
      idToLevel[level.dataValues.id] = level.dataValues.name;
      levelToId[level.dataValues.name] = level.dataValues.id;
    });
    return idToLevel;
  });
