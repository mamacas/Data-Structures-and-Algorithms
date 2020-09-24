'use strict';

const leftJoin = (obj1, obj2) => {
  console.log(obj1);
  console.log(obj2);

  const matrix = [];

  let keys = Object.keys(obj1);
  console.log(keys);

  for (let i = 0; i < keys.length; i++) {
    const arr = [];

    let key = keys[i];
    arr.push(key);

    let val1 = obj1[keys[i]];
    arr.push(val1);

    let val2 = obj2[keys[i]];
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
