'use strict';

const fizzBuzzTree = (tree) => {

  let root = tree.root;

  function _preOrderTraverse(root) {
    if(!root) {
      return;
    }

    _fbCheck(root);

    if (root.left) {
      _preOrderTraverse(root.left);
    }

    if (root.right) {
      _preOrderTraverse(root.right);
    }
  }

  _preOrderTraverse(root);
  return tree;

};

// helper function
function _fbCheck(node) {
  if (!node) {
    return;
  } else if (node.value % 15 === 0) {
    node.value = 'FizzBuzz';
  } else if (node.value % 5 === 0) {
    node.value = 'Buzz';
  } else if (node.value % 3 === 0) {
    node.value = 'Fizz';
  } else {
    node.value = node.value.toString();
  }
}

module.exports = fizzBuzzTree;
