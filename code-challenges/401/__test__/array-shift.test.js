const shiftArray = require('../arrayShift/array-shift.js');

// used tests provided by instructor
// will write original tests from this point onward, just couldn't figure out a better set of tests to write for this problem

test('shiftArray exists', () => {
  expect(shiftArray).toBeDefined();
});

test('array length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = shiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length + 1);
});

it('should not modify the original array', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  shiftArray(startArray, 'y');
  expect(startArray.length).toBe(6);
});

it('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = shiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
});
