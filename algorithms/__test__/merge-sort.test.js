'use strict';
const sort = require ('../mergeSort/merge-sort.js');

describe('Merge Sort', () => {

  it('should correctly sort an array of unique integers greater than 0', () => {
    let array1 = [5, 3, 1, 7];
    let result1 = sort(array1);
    expect(result1).toEqual([1, 3, 5, 7]);

    let array2 = [10, 80, 43, 67, 5, 23];
    let result2 = sort(array2);
    expect(result2).toEqual([5, 10, 23, 43, 67, 80]);

  });

  it('should not be thrown off by duplicate values', () => {
    let array3 = [5, 3, 1, 5, 7];
    let result3 = sort(array3);
    expect(result3).toEqual([1, 3, 5, 5, 7]);
  });

  it('should not be thrown off by negative numbers', () => {
    let array4 = [15, 20, 12, 8, 18, 5, -2];
    let result4 = sort(array4);
    expect(result4).toEqual([-2, 5, 8, 12, 15, 18, 20]);
  });

  it('should return array immediately if there is only one value inside', () => {
    let array5 = [5];
    let result5 = sort(array5);
    expect(result5).toEqual([5]);
  });

});
