const profile = (state = {}, action) => {
  switch (action.type) {

    case 'ADD_LEARN':
      const willLearn = state.willLearn;
      var duplicate;
      var halfDuplicate;
      var newWillLearn = []; 
      var replacedIndex;
      willLearn.forEach((language, index) => {
        if (language[0] === action.language[0]) {
          if (language[1] === action.language[1]) {
            duplicate = true;
          } else {
            halfDuplicate = true;
            replacedIndex = index;
          }
        }
      });
      if (duplicate) {
        return state;
      }
      if (halfDuplicate) {
        for (var i = 0; i < willLearn.length; i++) {
          if (i !== replacedIndex) {
            newWillLearn.push(willLearn[i]);
          } else {
            newWillLearn.push(action.language);
          }
        }
        return Object.assign({}, state, { willLearn: newWillLearn }, { needUpdate: true });
      }
      return Object.assign({}, state, { willLearn: willLearn.concat([action.language]) }, { needUpdate: true });

    case 'ADD_TEACH':
      const canTeach = state.canTeach;
      var duplicate;
      var halfDuplicate;
      var newCanTeach = [];
      var replacedIndex;
      canTeach.forEach((language, index) => {
        if (language[0] === action.language[0]) {
          if (language[1] === action.language[1]) {
            duplicate = true;
          } else {
            halfDuplicate = true;
            replacedIndex = index;
          }
        }
      }); 
      if (duplicate) {
        state;
      }
      if (halfDuplicate) {
        for (var i = 0; i < canTeach.length; i++) {
          if (i !== replacedIndex) {
            newCanTeach.push(canTeach[i]);
          } else {
            newCanTeach.push(action.language);
          }
        }
        return Object.assign({}, state, { canTeach: newCanTeach }, { needUpdate: true });
      }
      return Object.assign({}, state, { canTeach: canTeach.concat([action.language]) }, { needUpdate: true });

    case 'REMOVE_LEARN':
      const newLearn = [];
      state.willLearn.forEach((language) => {
        if (language[0] !== action.language[0] || language[1] !== action.language[1]) {
          newLearn.push(language);
        }
      });
      return Object.assign({}, state, { willLearn: newLearn }, { needUpdate: true });

    case 'REMOVE_TEACH':
      const newTeach = [];
      state.canTeach.forEach((language) => {
        if (language[0] !== action.language[0] || language[1] !== action.language[1]) {
          newTeach.push(language);
        }
      });
      return Object.assign({}, state, { canTeach: newTeach }, { needUpdate: true });

    case 'UPDATE_DESCRIPTION':
      return Object.assign({}, state, { description: action.description }, { needUpdate: true });

    case 'COMPLETE_UPDATE':
      return Object.assign({}, state, { needUpdate: false });

    case 'UPDATE_CAN_NOT_SUBMIT':
      return Object.assign({}, state, { canNotSubmit: action.canNotSubmit });

    default:
      return state;
  }
};

export default profile;
