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

  // check for closing brackets within the string
  let closed = {
    ')': true,
    ']': true,
    '}': true
  };

  // split the string into an array of individual characters
  let str = input.split('');

  for(let i = 0; i < str.length; i++) {

    // if the first bracket is a closing bracket, return false;
    if (str[0] === ']' || str[0] === ')' || str[0] === '}') {
      return false;
    }

    // if the first bracket is an opening bracket,
    // continue running the for loop:
    if (str[i] === '[' || str[i] === '(' || str[i] === '{') {

      if (open[str[i]]) {
        compare.push(str[i]);
      }

    } else if (closed[str[i]]) {

      if (open[compare.pop()] !== str[i]) {
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

