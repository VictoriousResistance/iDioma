module.exports.pluckUser = (userResults) => {
  const user = userResults[0];
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    description: user.description,
    photoUrl: user.photo_url,
    reached: true,
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
      reached: true,
    };
  });

module.exports.pluckLanguages = (offerOrLearnResults) =>
  ({
    canTeach: offerOrLearnResults[0],
    willLearn: offerOrLearnResults[1],
  });
