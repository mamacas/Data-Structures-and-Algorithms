'use strict';

const multiBracketValidation = (input) => {

  // if there is no input value passed or
  // if input is an empty string or
  // if input type is not a string:
  if (!input || input === '' || typeof input !== 'string') {
    return false;
  }

  // create holding cell for values from string to be compared:
  let compare = [];

  // create key for matching closing values for each type
  // of opening bracket:
  let open = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  // to assist in checking for closing brackets within the string
  let closed = {
    ')': true,
    ']': true,
    '}': true
  };

  // split the string into an array of individual characters
  let str = input;

  // if the first bracket is a closing bracket, return false;
  if (str[0] === ']' || str[0] === ')' || str[0] === '}') {
    return false;
  }

  for(let i = 0; i < str.length; i++) {

    let bracket = str[i];

    if (bracket === '[' || bracket === '(' || bracket === '{') {

      if (open[bracket]) {
        compare.push(bracket);
      }

    } else if (closed[bracket]) {
      if (open[compare.pop()] !== bracket) {
        return false;
      }
    }
  }

  if (compare.length !== 0) {
    return false;
  }

  return true;

};

multiBracketValidation();

module.exports = multiBracketValidation;

