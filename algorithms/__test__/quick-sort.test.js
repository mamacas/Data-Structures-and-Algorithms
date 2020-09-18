'use strict';
const quicksort = require ('../quickSort/quick-sort.js');

describe('Merge Sort', () => {

  it('should correctly quicksort an array of unique integers greater than 0', () => {
    let array1 = [5, 3, 1, 7];
    let result1 = quicksort(array1);
    expect(result1).toEqual([1, 3, 5, 7]);

    let array2 = [10, 80, 43, 67, 5, 23, 90, 101, 12, 20, 17];
    let result2 = quicksort(array2);
    expect(result2).toEqual([5, 10, 12, 17, 20, 23, 43, 67, 80, 90, 101]);

  });

  it('should not be thrown off by duplicate values', () => {
    let array3 = [5, 3, 1, 5, 7];
    let result3 = quicksort(array3);
    expect(result3).toEqual([1, 3, 5, 5, 7]);
  });

  it('should not be thrown off by negative numbers', () => {
    let array4 = [15, 20, -12, 8, 18, 5, -2];
    let result4 = quicksort(array4);
    expect(result4).toEqual([-12, -2, 5, 8, 15, 18, 20]);
  });

  it('should return array immediately if there is only one value or no values inside', () => {
    let array5 = [5];
    let result5 = quicksort(array5);
    expect(result5).toEqual([5]);

    let array6 = [];
    let result6 = quicksort(array6);
    expect(result6).toEqual([]);
  });

});
