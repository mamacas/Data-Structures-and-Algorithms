'use strict';

let array = [1, 2, 3, 4, 7, 9, 10, 12, 16, 19];

const binarySearch = (arr, x) => {
  let sIDX = 0;
  let eIDX = arr.length - 1;
  let mIDX = (Math.floor((eIDX - sIDX) / 2) + sIDX);

  if (x === arr[sIDX]) {
    return sIDX;
  }

  if (x === arr[eIDX]) {
    return eIDX;
  }

  if (x < arr[sIDX] || x > arr[eIDX]) {
    return -1;
  }

  while (!(eIDX - sIDX === 1)) {

    if (x === arr[mIDX]) {
      return mIDX;
    }

    if ( (arr[mIDX] < x) && (x < arr[eIDX]) ) {
      sIDX = mIDX;
      mIDX = (Math.floor((eIDX - sIDX) / 2)) + sIDX;
    } else if ( (arr[sIDX] < x) && (x < arr[mIDX]) ) {
      eIDX = mIDX;
      mIDX = (Math.floor((eIDX - sIDX) / 2)) + sIDX;
    }

  }

  return -1;
};

binarySearch(array, 12);

module.exports = binarySearch;
