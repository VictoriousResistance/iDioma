module.exports.pluckUser = (userResults) => {
  const user = userResults[0];
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    description: user.description,
    photoUrl: user.photo_url,
  };
};

module.exports.pluckUsers = (multipleUserResults) =>
  multipleUserResults.map((userResults) => {
    const user = userResults[0];
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      description: user.description,
      photoUrl: user.photo_url,
    };
  });

module.exports.pluckLanguages = (offerOrLearnResults) =>
  ({
    canTeach: offerOrLearnResults[0],
    willLearn: offerOrLearnResults[1],
  });

module.exports.pluckMatches = (matchesResults) => (
  matchesResults.map(matchResult => (
    {
      id: matchResult.teach_id,
      firstName: matchResult.teach_first,
      lastName: matchResult.teach_last,
      description: matchResult.teach_description,
      photoUrl: matchResult.teach_url,
    }
  ))
);

