
export const languageList = {
  1: 'Arabic',
  2: 'Bengali',
  3: 'Chinese',
  4: 'English',
  5: 'French',
  6: 'German',
  7: 'Hindi',
  8: 'Indonesian',
  9: 'Italian',
  10: 'Japanese',
  11: 'Korean',
  12: 'Malay',
  13: 'Persian',
  14: 'Portuguese',
  15: 'Russian',
  16: 'Spanish',
  17: 'Tamil',
  18: 'Telugu',
  19: 'Turkish',
  20: 'Urdu',
  21: 'Vietnamese',
};
export default languageList;

export const orderedArrayOfLanguages =
  Object.keys(languageList).map((languageId) => languageList[languageId]);
