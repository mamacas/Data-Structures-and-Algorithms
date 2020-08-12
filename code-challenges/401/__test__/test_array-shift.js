const shiftArray = require('../arrayShift/array-shift.js');


test('shiftArray exists', () => {
  expect(shiftArray).toBeDefined();
});

test('length should increase by 1', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = shiftArray(startArray, 'y');
  expect(resultArray.length).toBe(startArray.length + 1);
});

it('should not modify the original', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  shiftArray(startArray, 'y');
  expect(startArray.length).toBe(6);
});

it.skip('should have item added in correct spot', () => {
  const startArray = ['x', 'x', 'x', 'x', 'x', 'x'];
  const resultArray = shiftArray(startArray, 'y');
  expect(resultArray[3]).toBe('y');
});
