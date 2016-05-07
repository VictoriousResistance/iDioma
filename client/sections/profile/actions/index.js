export const addLearn = (language) => ({
  type: 'ADD_LEARN',
  language,
});

export const addTeach = (language) => ({
  type: 'ADD_TEACH',
  language,
});

export const removeLearn = (language) => ({
  type: 'REMOVE_LEARN',
  language,
});

export const removeTeach = (language) => ({
  type: 'REMOVE_TEACH',
  language,
});

export const updateDescription = (description) => ({
  type: 'UPDATE_DESCRIPTION',
  description,
});

export const completeUpdate = () => ({
  type: 'COMPLETE_UPDATE',
});
