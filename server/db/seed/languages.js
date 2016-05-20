const Languages = require('../models/languageModel.js');

const languageList = [
  'Arabic',
  'Bengali',
  'Chinese',
  'English',
  'French',
  'German',
  'Hindi',
  'Indonesian',
  'Italian',
  'Japanese',
  'Korean',
  'Malay',
  'Persian',
  'Portuguese',
  'Russian',
  'Spanish',
  'Tamil',
  'Telugu',
  'Turkish',
  'Urdu',
  'Vietnamese',
];

const languageEntries = languageList.map((language, index) =>
  ({ id: index + 1, name: language }));

module.exports.seed = () => (
  Languages.findAll({})
  .then(languages => {
    if (languages.length === 0) {
      return Languages.bulkCreate(languageEntries);
    }
    return languages;
  })
  .then((languages) => {
    const idToLanguage = module.exports.idToLanguage = {};
    const languageToId = module.exports.languageToId = {};
    languages.forEach((language) => {
      idToLanguage[language.dataValues.id] = language.dataValues.name;
      languageToId[language.dataValues.name] = language.dataValues.id;
    });
    return idToLanguage;
  })
);

