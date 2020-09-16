'use strict';

const merge = (left, right) => {
  const result = [];

  // make sure left and right arrays are not empty
  while (left.length && right.length) {
    // find lower value and push to result array accordingly
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // merge left array
  while (left.length) {
    result.push(left.shift());
  }

  // merge right array
  while (right.length) {
    result.push(right.shift());
  }

  // return result array
  return result;
};

// main function to return the sorted array
const mergeSort = arr => {
  // check if array can be split.
  // if array is only one element,
  // return arr immediately
  if (arr.length < 2) {
    return arr;
  }

  // get middle index
  const mid = Math.floor(arr.length / 2);

  // split array into two sides
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);

  // continue splitting using helper function
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

module.exports = mergeSort;
