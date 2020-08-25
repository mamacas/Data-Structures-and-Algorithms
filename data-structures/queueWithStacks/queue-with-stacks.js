'use strict';

const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {

    let flag = true;

    while (flag) {
      if (this.stack1.isEmpty()) {
        flag = false;
      } else {
        this.stack2.push(this.stack1.pop());
      }
    }

    let returnValue = this.stack2.pop();

    flag = true;
    while (flag) {
      if (this.stack2.isEmpty()) {
        flag = false;
      } else {
        this.stack1.push(this.stack2.pop);
      }
    }

    return returnValue;
  }

}


module.exports = PseudoQueue;
