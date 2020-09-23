'use strict';

const Node = require('../../../data-structures/tree/tree.js').Node;
const BinaryTree = require('../../../data-structures/tree/tree.js').BinaryTree;
const findCommon = require('../treeIntersection/tree-intersection.js');

describe('Tree Intersection', () => {

  it('should recognize two binary trees and have the ability to preOrder traverse both of them', () => {

    const one = new Node(1);
    const ten = new Node(10);
    const three = new Node(3, one, ten);

    const seven = new Node(7);
    const five = new Node(5);
    const eleven = new Node(11, seven, five);

    const tree1 = new BinaryTree(three);
    const tree2 = new BinaryTree(eleven);

    const result1 = tree1.preOrder();
    const result2 = tree2.preOrder();

    expect(result1).toEqual([3, 1, 10]);
    expect(result2).toEqual([11, 7, 5]);

  });

  it('should traverse both trees and return an array of identical values that exist between them, if there are identical values', () => {

    const one = new Node(1);
    const eight = new Node(8);
    const three = new Node(3, one, eight);

    const seven = new Node(7);
    const ate = new Node(8);
    const eleven = new Node(11, seven, ate);

    const tree1 = new BinaryTree(three);
    const tree2 = new BinaryTree(eleven);

    const result = findCommon(tree1, tree2);
    expect(result).toEqual([8]);
  });

  it('should indicate that there are no identical values between both trees if there are none', () => {
    const one = new Node(1);
    const ten = new Node(10);
    const three = new Node(3, one, ten);

    const seven = new Node(7);
    const five = new Node(8);
    const eleven = new Node(11, seven, five);

    const tree1 = new BinaryTree(three);
    const tree2 = new BinaryTree(eleven);

    const result = findCommon(tree1, tree2);
    expect(result).toEqual('No identical values present between trees');
  });

});


