'use strict';

const findCommon = (tree1, tree2) => {

  let arr1 = [];
  let arr2 = [];
  let obj = {};
  let result = [];

  const _preOrder = (root, arr) => {

    if (!root) {
      return;
    }

    arr.push(root.value);

    if (root.left) {
      _preOrder(root.left, arr);
    }

    if (root.right) {
      _preOrder(root.right, arr);
    }
  };

  _preOrder(tree1.root, arr1);
  _preOrder(tree2.root, arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
      result.push(arr1[i]);
    }

    obj[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      result.push(arr2[i]);
    }

    obj[arr2[i]] = 1;
  }

  if (result.length) {
    return result;
  }

  return 'No identical values present between trees';
};

module.exports = findCommon;
