'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');

const PseudoQueue = require('../queueWithStacks/queue-with-stacks.js');

describe('PseudoQueue Class', () => {

  it('should instantiate an empty PseudoQueue', () => {
    const queue = new PseudoQueue();
    expect(queue).toBeDefined();
  });

  it('should recognize all properties and methods of the class', () => {
    const queue = new PseudoQueue();
    queue.stack1 = new Stack();
    queue.stack2 = new Stack();
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.stack1).toBeDefined();
    expect(queue.stack2).toBeDefined();
    expect(queue.enqueue).toBeDefined();
    expect(queue.dequeue).toBeDefined();
  });

  it('should successfully enqueue to the back of a queue which already contains values', () => {
    const queue = new PseudoQueue();
    queue.enqueue(456);
    queue.enqueue(123);
    queue.enqueue(987);
    expect(queue.stack1.top.value).toStrictEqual(987);
    expect(queue.stack1.top.next.value).toStrictEqual(123);
  });

  it('should successfully enqueue to an empty queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(123);
    expect(queue.stack1.top.value).toBe(123);
  });

  it('should successfully dequeue from the front of the queue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(123);
    let returnValue = queue.dequeue();
    expect(returnValue).toStrictEqual(123);
  });

});

