'use strict';

const squareRoot = require('../math/square-root.js');

describe('squareRoot', () => {
  it('should handle positive whole numbers whose square roots are also whole numbers', () => {
    expect(squareRoot(9)).toEqual(3);
    expect(squareRoot(16)).toEqual(4);
    expect(squareRoot(81)).toEqual(9);
  });

  it.skip('should handle positive whole numbers whose square roots include decimals', () => {
    expect(squareRoot(8)).toEqual(Math.sqrt(8));
  });

  it.skip('should throw an error if passed 0, a negative integer, or a decimal value', () => {
    expect(() => squareRoot(-8)).toThrowError('Cannot find square root of negative integer');
    expect(() => squareRoot(0)).toThrowError('Cannot find square root of 0');
    expect(() => squareRoot(1.5)).toThrowError('Cannot find square root of negative integer');
  });
});

