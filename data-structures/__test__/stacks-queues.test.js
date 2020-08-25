const Node = require('../stacksAndQueues/stacks-and-queues.js').Node;

const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack;

const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

describe('Node', () => {

  it('should be a class', () => {
    expect(Node).toBeDefined();
  });

  it('should contain a value property and a next property', () => {
    const node = new Node();
    node.value = 123;
    node.next = 456;
    expect(node.value).toBeDefined();
    expect(node.next).toBeDefined();
  });

});


describe('Stacks', () => {

  it('should be a class', () => {
    expect(Stack).toBeDefined();
  });

  it('should instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('abc');
    stack.push('xyz');
    expect(stack.top.value).toBe('xyz');
  });

  it('should successfully pop off from a stack containing only one node', () => {
    const stack = new Stack();
    stack.push('xyz');
    const popped = stack.pop();
    expect(popped).toBe('xyz');
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should successfully pop off from a stack containing more than one node', () => {
    const stack = new Stack();
    stack.push('abc');
    stack.push('xyz');
    const popped = stack.pop();
    expect(popped).toBe('xyz');
    expect(stack.isEmpty()).toBeFalsy();
  });

  it('should successfully pop off from a stack until the stack is empty', () => {
    const stack = new Stack();
    stack.push('xyz');
    stack.push('abc');
    stack.push('rst');
    stack.push('lmn');
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should not allow popping from empty stack', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(Error);
    expect(() => stack.pop()).toThrow('cannot pop empty stack');
  });

  it('should peek at the top node in the stack', () => {
    const stack = new Stack();
    stack.push('xyz');
    expect(stack.peek()).toBe('xyz');
  });

  it('should not allow peeking an empty stack', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow(Error);
    expect(() => stack.peek()).toThrow('cannot peek empty stack');
  });

  it('should return true if stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy;
  });

  it('should return false if stack is not empty', () => {
    const stack = new Stack();
    stack.push('abc');
    expect(stack.isEmpty()).toBeFalsy;
  });

});

describe('Queue', () => {

  it('should be a class', () => {
    expect(Queue).toBeDefined();
  });

  it('should instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });

  it('should return true if queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy;
  });

  it('should return false if the queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue('abc');
    expect(queue.isEmpty()).toBeFalsy;
  });

  it('should successfully enqueue into an empty queue', () => {
    const queue = new Queue();
    queue.enqueue('abc');
    expect(queue.front.value).toBe('abc');
    expect(queue.rear.value).toBe('abc');
  });

  it('should successfully enqueue into the rear position of a queue with existing values', () => {
    const queue = new Queue();
    queue.enqueue('abc');
    queue.enqueue('rst');
    queue.enqueue('xyz');
    expect(queue.front.value).toBe('abc');
    expect(queue.front.next.value).toBe('rst');
    expect(queue.rear.value).toBe('xyz');
    expect(queue.rear.next).toBe(null);
  });

  it('should peek at the front node in the queue', () => {
    const queue = new Queue();
    queue.enqueue('abc');
    queue.enqueue('xyz');
    expect(queue.peek()).toBe('abc');
  });

  it('should not allow peeking an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow(Error);
    expect(() => queue.peek()).toThrow('cannot peek empty queue');
  });

  it('should dequeue from the front of the queue if there is only one node in the queue', () => {
    const queue = new Queue();
    queue.enqueue('xyz');
    let popped = queue.dequeue();
    expect(popped).toBe('xyz');
    expect(queue.isEmpty()).toBeTruthy;
  });

  it('should dequeue from the front of the queue if there are multiple nodes in the queue', () => {
    const queue = new Queue();
    queue.enqueue('xyz');
    queue.enqueue('abc');
    queue.enqueue('rst');
    queue.enqueue('lmn');
    let popped = queue.dequeue();
    expect(popped).toBe('xyz');
    expect(queue.isEmpty()).toBeFalsy;
  });

  it('should not allow dequeueing from an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow(Error);
    expect(() => queue.dequeue()).toThrow('cannot dequeue from empty queue');
  });

});
