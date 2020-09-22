'use strict';

const checkRepeats = (str) => {

  // takes out the following characters:
  // '.' '/' ',' '!' '-' '_' '&' '+'
  let newSTR = str.replace(/[\d\.\/,!\-_&\+]/g, '');

  // removes extra spaces created as a result of removing special characters
  let nospaceSTR = newSTR.replace(/\s{2,}/g, ' ');

  // sets string to upper case to account for case differences
  let finalSTR = nospaceSTR.toLowerCase();

  let arr = finalSTR.split(' ');

  let obj = {};

  for (let i = 0; i < arr.length; i++) {

    // if array value already exists as an object key, it means it is the first repeated word in the array
    if (obj[arr[i]]) {
      return arr[i];
    }

    // set array value at i to object key if it does not already exist as a key in the object
    obj[arr[i]] = 1;
  }

  // if we loop through the entire array, it means there are no repeated values
  return 'No repeated words in this string';

};

module.exports = checkRepeats;
