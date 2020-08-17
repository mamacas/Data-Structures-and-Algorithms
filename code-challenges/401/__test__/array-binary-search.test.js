const binarySearch = require('../arrayBinarySearch/array-binary-search.js');


test('binarySearch exists', () => {
  expect(binarySearch).toBeDefined();
});

test('it should properly identify the start, end, and middle indeces', () => {
  let arr = [1, 2, 3, 4, 5, 6];
  let sIDX = 0;
  let eIDX = arr.length -1;
  let mIDX = (Math.floor((eIDX - sIDX) / 2) + sIDX);
  expect(arr[sIDX]).toStrictEqual(1);
  expect(arr[eIDX]).toStrictEqual(6);
  expect(arr[mIDX]).toStrictEqual(3);
});

test('it should return the index once the value of index is equal to x, or return -1 if x is not present in the array', () => {
  let arr = [1, 2, 4, 6, 7, 10, 12, 16, 21];
  expect(binarySearch(arr, 12)).toStrictEqual(6);
  expect(binarySearch(arr, 7)).toStrictEqual(4);
  expect(binarySearch(arr, 4)).toStrictEqual(2);
  expect(binarySearch(arr, 9)).toStrictEqual(-1);
});
