'use strict';
//given an integer, find its square root:

const squareRoot = (x) => {

  let low = 0.0;
  let mid = x / 2;
  let high = x;

  while ((mid * mid !== x)) {

    if ((mid * mid) > x) {
      high = mid;
    }

    if ((mid * mid) < x) {
      low = mid;
    }

    mid = (high + low) / 2;
  }

  return mid;

};


module.exports = squareRoot;

