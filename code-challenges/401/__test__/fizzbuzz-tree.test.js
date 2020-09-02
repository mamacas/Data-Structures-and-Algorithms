'use strict';

const Node = require('../../../data-structures/tree/tree.js').Node;
const BinaryTree = require('../../../data-structures/tree/tree.js').BinaryTree;
const fizzBuzzTree = require('../fizzBuzzTree/fizzbuzz-tree.js');

it('recognizes a created binary tree', () => {

  const rootnode = new Node(10);
  const tree = new BinaryTree(rootnode);

  tree.root.left = new Node(5);
  tree.root.left.left = new Node(17);
  tree.root.left.right = new Node(14);
  tree.root.right = new Node(3);
  tree.root.right.right = new Node(15);
  tree.root.right.left = new Node(12);

  expect(tree.root.value).toEqual(10);
  expect(tree.root.left.value).toEqual(5);
  expect(tree.root.left.left.value).toEqual(17);
  expect(tree.root.left.right.value).toEqual(14);
  expect(tree.root.right.value).toEqual(3);
  expect(tree.root.right.right.value).toEqual(15);
  expect(tree.root.right.left.value).toEqual(12);

});

it('should convert integer values divisible by neither 5 nor 3 to strings', () => {
  const rootnode = new Node(10);
  const tree = new BinaryTree(rootnode);

  tree.root.left = new Node(5);
  tree.root.left.left = new Node(17);
  tree.root.right = new Node(12);

  fizzBuzzTree(tree);

  expect(tree.root.left.left.value).toEqual('17');
  expect(typeof(tree.root.left.left.value)).toBe('string');
});

it('should change values divisible by 3 and 5 to FizzBuzz', () => {
  const rootnode = new Node(10);
  const tree = new BinaryTree(rootnode);

  tree.root.left = new Node(5);
  tree.root.left.left = new Node(15);
  tree.root.right = new Node(12);

  fizzBuzzTree(tree);

  expect(tree.root.left.left.value).toEqual('FizzBuzz');
});

it('should change values divisible by 5 to Buzz', () => {
  const rootnode = new Node(10);
  const tree = new BinaryTree(rootnode);

  tree.root.left = new Node(5);
  tree.root.left.left = new Node(15);
  tree.root.right = new Node(12);

  fizzBuzzTree(tree);

  expect(tree.root.left.value).toEqual('Buzz');
});

it('should change values divisible by 3 to Fizz', () => {
  const rootnode = new Node(10);
  const tree = new BinaryTree(rootnode);

  tree.root.left = new Node(3);
  tree.root.left.left = new Node(15);
  tree.root.right = new Node(12);

  fizzBuzzTree(tree);

  expect(tree.root.left.value).toEqual('Fizz');
  expect(tree.root.right.value).toEqual('Fizz');
});
