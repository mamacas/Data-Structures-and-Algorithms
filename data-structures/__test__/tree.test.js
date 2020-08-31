'use strict';

const Node = require('../tree/tree.js').Node;
const BinaryTree = require('../tree/tree.js').BinaryTree;
const BinarySearchTree = require('../tree/tree.js').BinarySearchTree;


describe('Node', () => {

  it('recognizes a root node with only a value', () => {
    const nN = new Node(3);
    expect(nN.value).toBe(3);
  });

  it('recognizes a node with a value and a left, and a null right', () => {
    const two = new Node(2);
    let nN = new Node(1, two);
    expect(nN.value).toBe(1);
    expect(nN.left).toBe(two);

  });

  it('recognizes a node with a value, a left, and a right', () => {
    const two = new Node(2);
    const five = new Node(5);
    let nN = new Node(1, two, five);
    expect(nN.value).toBe(1);
    expect(nN.left).toBe(two);
    expect(nN.right).toBe(five);
  });

});

describe('Binary Tree', () => {

  it('can find the maximum value stored in the tree', () => {
    const five = new Node(5);
    const two = new Node(2);
    const seven = new Node(7);
    const twentytwo = new Node(22);

    const tree = new BinaryTree(five);
    tree.root.left = two;
    tree.root.right = seven;
    tree.root.right.right = twentytwo;

    const res = tree.findMaximumValue();
    expect(res).toStrictEqual(22);

  });

  it('will not try finding the maximum of an empty tree', () => {
    const tree = new BinaryTree();
    expect(() => tree.findMaximumValue()).toThrow(Error);
    expect(() => tree.findMaximumValue()).toThrow('Cannot find value in an empty tree');

  });

  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    const result = tree.preOrder();
    expect(result).toEqual([1]);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const one = new Node(1);
    const ten = new Node(10);
    const three = new Node(3, one, ten);
    const tree = new BinaryTree(three);
    const results = tree.preOrder();
    expect(results).toEqual([3, 1, 10]);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const one = new Node(1);
    const ten = new Node(10);
    const three = new Node(3, one, ten);
    const tree = new BinaryTree(three);
    const results = tree.inOrder();
    expect(results).toEqual([1, 3, 10]);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const one = new Node(1);
    const ten = new Node(10);
    const three = new Node(3, one, ten);
    const tree = new BinaryTree(three);
    const results = tree.postOrder();
    expect(results).toEqual([1, 10, 3]);
  });

});


describe('Binary Search Tree', () => {

  it('can add a new node with the input value to the correct location', () => {
    let nN = new Node(40);
    let bst = new BinarySearchTree(nN);
    bst.add(45);
    bst.add(50);
    bst.add(27);
    expect(bst.root.value).toBe(40);
    expect(bst.root.left.value).toBe(27);
    expect(bst.root.right.value).toBe(45);
    expect(bst.root.right.right.value).toBe(50);
  });

  it('can return a boolean indicating whether the value is in the tree at least once', () => {
    let bst = new BinarySearchTree();
    bst.add(40);
    bst.add(50);
    bst.add(27);
    expect(bst.contains(40)).toBeTruthy;
    expect(bst.contains(50)).toBeTruthy;
    expect(bst.contains(27)).toBeTruthy;
    expect(bst.contains(36)).toBeFalsy;
  });

});

