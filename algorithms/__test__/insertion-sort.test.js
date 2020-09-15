'use strict';

const sort = require('../insertionSort/insertion-sort.js');

describe('Insertion Sort', () => {

  it('should correctly sort an array of integers', () => {
    let array1 = [5, 3, 1, 7];
    sort(array1);
    expect(array1).toEqual([1, 3, 5, 7]);

    let array2 = [32, 20, 100, 45, 8];
    sort(array2);
    expect(array2).toEqual([8, 20, 32, 45, 100]);

    let array3 = [10, 12, 5, 1, 20];
    sort(array3);
    expect(array3).toEqual([1, 5, 10, 12, 20]);

    let array4 = [17, 19, 4, 2, 10, 25, 30];
    sort(array4);
    expect(array4).toEqual([2, 4, 10, 17, 19, 25, 30]);
  });

});

