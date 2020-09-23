'use strict';

// const Node = require('../tree/tree.js').Node;
// const BinaryTree = require('../tree/tree.js').BinaryTree;

const findCommon = (tree1, tree2) => {

  let arr = [];
  let obj = {};
  let result = [];

  const _preOrder = (root) => {

    if (!root) {
      return;
    }

    arr.push(root.value);

    if (root.left) {
      _preOrder(root.left);
    }

    if (root.right) {
      _preOrder(root.right);
    }
  };

  _preOrder(tree1.root);
  _preOrder(tree2.root);

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      result.push(arr[i]);
    }

    obj[arr[i]] = 1;
  }

  if (result.length) {
    return result;
  }

  return 'No identical values present between trees';
};

module.exports = findCommon;
