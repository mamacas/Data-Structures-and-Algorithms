const Stack = require('../stack/stack.js');

it('should be a class', () => {
  expect(Stack).toBeDefined();
});

it('should instantiate an empty stack', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
});

it.skip('should successfully push onto a stack', () => {
  const stack = new Stack();
  stack.push('xyz');
});

it('should return true if stack is empty', () => {
  const stack = new Stack();
  expect(stack).isEmpty().toBeTruthy;
});

it('should return false if stack is not empty', () => {
  const stack = new Stack();
  stack.push('abc');
  expect(stack).isEmpty().toBeFalsy;
});

it('should not allow popping from empty stack', () => {
  const stack = new Stack();
  expect(() => stack.pop).toThrow(Error);
  expect(() => stack.peek).toThrow('cannot pop empty stack');
});

it('should not allow peeking an empty stack', () => {
  const stack = new Stack();
  expect(() => stack.peek).toThrow(Error);
  expect(() => stack.peek).toThrow('cannot peek empty stack');
});
