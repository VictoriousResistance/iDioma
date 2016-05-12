const db = require('../db.js');
const Languages = require('../models/languageModel.js');

module.exports.seed = () =>
  Languages.bulkCreate([
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
  ])
  .then((languages) => {
    const languagesStore = module.exports.store = {};
    languages.forEach(function(language) {
      languagesStore[language.dataValues.id] = language.dataValues.name;
    });
    return languagesStore;
  });
