'use strict';

const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter.js');

describe('AnimalShelter Class', () => {

  it('should recognize the class', () => {
    const shelter = new AnimalShelter();
    expect(shelter).toBeDefined();
  });

  it('should successfully enqueue a new animal to an empty queue', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    expect(shelter.front.value).toBe('dog');
    expect(shelter.rear.value).toBe('dog');
  });

  it('should successfully enqueue a new animal to the rear of an empty queue', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.front.value).toBe('dog');
    expect(shelter.rear.value).toBe('cat');
  });

  it('should not dequeue from an empty queue', () => {
    const shelter = new AnimalShelter();
    expect(() => shelter.dequeue()).toThrow(Error);
    expect(() => shelter.dequeue()).toThrow('cannot dequeue from an empty queue');
  });

  it('should return null when the value passed for pref is neither a dog nor a cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    let result = shelter.dequeue('rabbit');
    expect(result).toBe(null);
  });

  it('should return null when there is only one animal in the queue and its type does not match the preference', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    let result = shelter.dequeue('cat');
    expect(result).toBe(null);
  });

  it('should dequeue from a queue containing one animal when the animal in the queue is the preferred animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    let popped = shelter.dequeue('dog');
    expect(popped).toBe('dog');
    expect(shelter.front).toBe(null);
  });

  it('should dequeue from a queue containing multiple animals when the animal at the front of the queue is the preferred animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    let popped = shelter.dequeue('dog');
    expect(popped).toBe('dog');
    expect(shelter.rear.value).toBe('cat');
  });

  it('should dequeue the first instance of the preferred animal when there is more than one animal in the queue and the animal in the front of the queue is not the preferred animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue('cat');
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('dog');
    let popped = shelter.dequeue('dog');
    expect(popped).toBe('dog');
  });

});
