'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {

  constructor() {
    this.top = null;
  }

  peek() {

    if (this.isEmpty()) {
      throw new Error('cannot peek empty stack');
    }

    return this.top.value;

  }

  push(value) {

    this.top = new Node(value, this.top);
  }

  pop() {

    if (this.isEmpty()) {
      throw new Error('cannot pop empty stack');
    }

    let temp = this.top;

    // if only one node in stack:
    if (!this.top.next) {
      this.top = null;
      return temp.value;
    }

    // if more than one node in stack:
    if (this.top.next) {
      this.top = this.top.next;
      return temp.value;
    }

  }

  isEmpty() {

    if (this.top) {
      return false;
    }

    return true;

  }

}

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

    if (this.isEmpty()) {

      let temp = new Node(value, null);
      this.front = temp;
      this.rear = temp;
      return;

    }

    let temp = new Node(value, null);
    this.rear.next = temp;
    this.rear = temp;

  }

  peek() {

    if (this.isEmpty()) {
      throw new Error('cannot peek empty queue');
    }

    return this.front.value;

  }

  dequeue() {

    if (this.isEmpty()) {
      throw new Error('cannot dequeue from empty queue');
    }

    let temp = this.front;

    // if only one node in queue:
    if (!this.front.next) {
      this.front = null;
      return temp.value;
    }

    // if more than one node in queue:
    if (this.front.next) {
      this.front = this.front.next;
      return temp.value;
    }

  }

  isEmpty() {

    if (this.front) {
      return false;
    }

    return true;

  }


}

module.exports = { Node, Stack, Queue };

