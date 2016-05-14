const Languages = require('../models/languageModel.js');

module.exports.seed = () =>
  Languages.bulkCreate([
    { id: '1', name: 'English' },
    { id: '2', name: 'Spanish' },
    { id: '3', name: 'French' },
    { id: '4', name: 'German' },
  ])
  .then((languages) => {
    const idToLanguage = module.exports.idToLanguage = {};
    const languageToId = module.exports.languageToId = {};
    languages.forEach(function(language) {
      idToLanguage[language.dataValues.id] = language.dataValues.name;
      languageToId[language.dataValues.name] = language.dataValues.id;
    });
    return idToLanguage;
  });
