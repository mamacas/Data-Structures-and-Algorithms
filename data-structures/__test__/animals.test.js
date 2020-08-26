'use strict';

const { Node } = require('../linkedList/linked-list.js');

const AnimalShelter = require('../queueWithStacks/queue-with-stacks.js');

describe('AnimalShelter Class', () => {

  it('should recognize the class', () => {
    const shelter = new AnimalShelter();
    expect(shelter).toBeDefined();
  });


});
