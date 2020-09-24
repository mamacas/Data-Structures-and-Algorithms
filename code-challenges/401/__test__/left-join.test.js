'use strict';

const leftJoin = require('../leftJoin/left-join.js');

describe('Left Join', () => {

  it('should return an array of arrays containing the object key at index 0, the value from the left object at index 1, and the value from the right object at index 2', () => {

    const obj1 = { accessible: 'reachable', service: 'assistance', productive: 'effective' };
    const obj2 = { accessible: 'restricted', service: 'hindrance', productive: 'lagging' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'accessible', 'reachable', 'restricted' ],
        [ 'service', 'assistance', 'hindrance' ],
        [ 'productive', 'effective', 'lagging' ]
      ]
    );

  });

  it('should work if there are keys present in the left object which do not exist in the right object, returning null at index 2 of the inner array for that key', () => {

    const obj1 = { accessible: 'reachable', service: 'assistance', productive: 'effective', innovation: 'invention' };
    const obj2 = { accessible: 'restricted', service: 'hindrance', productive: 'lagging' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'accessible', 'reachable', 'restricted' ],
        [ 'service', 'assistance', 'hindrance' ],
        [ 'productive', 'effective', 'lagging' ],
        [ 'innovation', 'invention', null ]
      ]

    );

  });

  it('should not include an inner array for keys which are only present in the right object, but not the left', () => {
    const obj1 = { accessible: 'reachable', service: 'assistance', productive: 'effective', innovation: 'invention' };
    const obj2 = { accessible: 'restricted', service: 'hindrance', productive: 'lagging', global: 'local' };

    const result = leftJoin(obj1, obj2);
    expect(result).toEqual(
      [
        [ 'accessible', 'reachable', 'restricted' ],
        [ 'service', 'assistance', 'hindrance' ],
        [ 'productive', 'effective', 'lagging' ],
        [ 'innovation', 'invention', null ]
      ]
    );
  });

});
