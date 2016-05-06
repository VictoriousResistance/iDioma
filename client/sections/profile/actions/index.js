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