const Node = require('../stacksAndQueues/stacks-and-queues.js');
const Stack = require('../stacksAndQueues/stacks-and-queues.js');
// const Queue = require('../stacksAndQueues/stacks-and-queues.js');

it('Nodes, Stacks and Queues should be classes', () => {
  expect(Node).toBeDefined();
  expect(Stack).toBeDefined();
  // expect(Queue).toBeDefined();
});

describe('Stacks', () => {

  it('should instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('xyz');
    expect(stack.head.value).toBe('xyz');
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


