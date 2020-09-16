'use strict';

const quickSort = (arr) => {

  // catch edge case:
  // array contains 0 or 1 values
  if (arr.length <= 1) {
    return arr;
  }

  // declare last array element as the pivot
  const pivot = arr[arr.length - 1];

  // create two sub arrays to fill with values
  // after they are compared to pivot
  const leftArr = [];
  const rightArr = [];

  // don't want to include pivot in this loop
  for(let i = 0; i < arr.length - 1; i++) {
    // compare values against pivot
    // and sort into leftArr and rightArr
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // ... is a spread operator, which converts an array of values into plaintext comma-separated values
  // this return statement will work even if the left or right array are empty (which would indicate that the pivot value was either the highest or lowest in the array)
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

module.exports = quickSort;

