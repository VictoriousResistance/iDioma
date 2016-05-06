const profile = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LEARN':
      const willLearn = state.willLearn;
      const newWillLearn = [];
      willLearn.forEach((language) {
        if (language[0] !== action.language[0] && language[1] !== action.language[1]) {
          newWillLearn.push(language);
        }
      })
      return Object.assign({}, state, {willLearn: newWillLearn});
    default:
      return state;
  }
};

export default profile;
