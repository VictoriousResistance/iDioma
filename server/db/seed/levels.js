const Levels = require('../models/levelModel.js');

module.exports.seed = () =>
  Levels.bulkCreate([
    {
      id: '1',
      name: 'beginner',
    },
    {
      id: '2',
      name: 'intermediate',
    },
    {
      id: '3',
      name: 'advanced',
    },
    {
      id: '4',
      name: 'native',
    },
    {
      id: '5',
      name: 'fluent',
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
