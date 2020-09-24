'use strict';

const leftJoin = require('../leftJoin/left-join.js');

describe('Left Join', () => {

  it('should return an array of arrays containing the object key at index 0, the value from the left object at index 1, and the value from the right object at index 2', () => {

    const obj1 = { key: 'anotha', key2: 'we the best', key3: 'dj' };
    const obj2 = { key: 'one', key2: 'music', key3: 'khaled' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'key', 'anotha', 'one' ],
        [ 'key2', 'we the best', 'music' ],
        [ 'key3', 'dj', 'khaled' ],
      ]
    );

  });

  it('should work if there are keys present in the left object which do not exist in the right object, returning null at index 2 of the inner array for that key', () => {

    const obj1 = { key: 'anotha', key2: 'we the best', key3: 'dj', key4: 'asahd' };
    const obj2 = { key: 'one', key2: 'music', key3: 'khaled' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'key', 'anotha', 'one' ],
        [ 'key2', 'we the best', 'music' ],
        [ 'key3', 'dj', 'khaled' ],
        [ 'key4', 'asahd', null ]
      ]
    );

  });

  it('should not include an inner array for keys which are only present in the right object, but not the left', () => {
    const obj1 = { key: 'anotha', key2: 'we the best', key3: 'dj', key4: 'asahd' };
    const obj2 = { key: 'one', key2: 'music', key3: 'khaled', key5: 'leave me out' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'key', 'anotha', 'one' ],
        [ 'key2', 'we the best', 'music' ],
        [ 'key3', 'dj', 'khaled' ],
        [ 'key4', 'asahd', null ]
      ]
    );
  });

});
