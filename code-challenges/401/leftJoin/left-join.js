'use strict';

const leftJoin = (leftObj, rightObj) => {

  const matrix = [];

  let keys = Object.keys(leftObj);

  for (let i = 0; i < keys.length; i++) {
    const arr = [];

    let key = keys[i];
    arr.push(key);

    let syn = leftObj[keys[i]];
    arr.push(syn);

    let ant = rightObj[keys[i]];
    if (ant) {
      arr.push(ant);
    } else {
      arr.push(null);
    }

    matrix.push(arr);
  }

  return matrix;
};

module.exports = leftJoin;
