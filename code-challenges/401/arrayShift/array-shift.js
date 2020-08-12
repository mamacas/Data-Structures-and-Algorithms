'use strict';

// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

let array = [1, 2, 3, 4, 5, 6];

const insertShiftArray = (arr, val) => {

  // capture middle index in arr
  // if array.length % 2 !== 0,
  // use Math.ceil to round up to nearest integer
  let mid = Math.ceil(arr.length / 2);

  // create output array
  let arr2 = [];

  // iterate over arr
  // when we reach the middle index, push val to the result array
  // then continue iterating over arr,
  // pushing the remaining values into the result array
  for (let i = 0; i < arr.length; i++) {
    if (i === mid) {
      arr2.push(val);
    }
    arr2.push(arr[i]);
  }

  return arr2;

};

console.log(insertShiftArray(array, 100));

// export function to allow test file to access it
module.exports = insertShiftArray;
