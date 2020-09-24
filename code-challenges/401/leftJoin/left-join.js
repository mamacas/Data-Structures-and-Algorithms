'use strict';

const leftJoin = (leftObj, rightObj) => {
  console.log(leftObj);
  console.log(rightObj);

  const matrix = [];

  let keys = Object.keys(leftObj);
  console.log(keys);

  for (let i = 0; i < keys.length; i++) {
    const arr = [];

    let key = keys[i];
    arr.push(key);

    let val1 = leftObj[keys[i]];
    arr.push(val1);

    let val2 = rightObj[keys[i]];
    if (val2) {
      arr.push(val2);
    } else {
      arr.push(null);
    }

    matrix.push(arr);
  }

  console.log(matrix);


  return matrix;
};

module.exports = leftJoin;
