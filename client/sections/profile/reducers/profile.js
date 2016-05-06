const profile = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_LEARN':
      const willLearn = state.willLearn;
      var duplicate = false;
      willLearn.forEach((language) => {
        if (language[0] === action.language[0] && language[1] === action.language[1]) {
          duplicate = true;
        }
      })
      if (duplicate) {
        return state;
      }
      return Object.assign({}, state, { willLearn: willLearn.concat([action.language]) });

    case 'ADD_TEACH':
      const canTeach = state.canTeach;
      var duplicate = false;
      canTeach.forEach((language) => {
        if (language[0] === action.language[0] && language[1] === action.language[1]) {
          duplicate = true;
        }
      }); 
      if (duplicate) {
        return state;
      }
      return Object.assign({}, state, { canTeach: canTeach.concat([action.language])  });

    case 'REMOVE_LEARN':
      const newLearn = [];
      state.willLearn.forEach((language) => {
        if (language[0] !== action.language[0] || language[1] !== action.language[1]) {
          newLearn.push(language);
        }
      });
      return Object.assign({}, state, { willLearn: newLearn });

    case 'REMOVE_TEACH':
      const newTeach = [];
      state.canTeach.forEach((language) => {
        if (language[0] !== action.language[0] || language[1] !== action.language[1]) {
          newTeach.push(language);
        }
      });
      return Object.assign({}, state, { canTeach: newTeach });

    default:
      return state;
  }
};

export default profile;
