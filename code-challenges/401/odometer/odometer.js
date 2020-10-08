'use strict';

const Node = require('../../../data-structures/linkedList/linked-list.js').Node;

// inputs/outputs:
// 5382 should become 5383
// 5389 should become 5390
// 9999 should become 10000

const odometer = (list) => {
  let arr = [];
  let count = 0;
  let current = list.head;

  while (current) {
    count++;
    arr.push(current.value);
    current = current.next;
  }

  let last = arr[arr.length-1];

  if (last < 9) {
    arr[arr.length-1] += 1;
  }

  let cur_idx = arr.length - 1;

  if (arr[cur_idx] === 9) {
    while (cur_idx > 0 && arr[cur_idx-1] === 9) {
      arr[cur_idx] = 0;
      cur_idx -= 1;
    }
    if (cur_idx > 0) {
      arr[cur_idx-1] += 1;
      arr[cur_idx] = 0;
    } else {
      arr[cur_idx] = 1;
      arr.push(0);
    }
  }

  // reset current to traverse list and change node values
  current = list.head;
  let i = 0;
  let temp = null;
  while(i < count) {
    current.value = arr[i];
    temp = current;
    current = current.next;
    i++;
  }

  if (count < arr.length) {
    temp.next = new Node(0);
  }

  let current1 = list.head;

  while (current1) {
    current1 = current1.next;
  }

  return list;
};

module.exports = { odometer };
