const Languages = require('../models/languageModel.js');

module.exports.seed = () =>
  Languages.bulkCreate([
    { id: 1, name: 'English' },
    { id: 2, name: 'Spanish' },
    { id: 3, name: 'French' },
  ])
  .then((languages) => {
    const idToLanguage = module.exports.idToLanguage = {};
    languages.forEach(function(language) {
      idToLanguage[language.dataValues.id] = language.dataValues.name;
    });
    return idToLanguage;
  });
