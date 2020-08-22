class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {

  constructor() {
    this.head = null;
  }

  peek() {

    if (this.isEmpty()) {
      throw new Error('cannot peek empty stack');
    }

    return this.head.value;

  }

  push(value) {
    this.head = new Node(value, this.head);
  }

  pop() {

    if (this.isEmpty()) {
      throw new Error('cannot pop empty stack');
    }

    if (!this.head.next) {
      let temp = this.head;
      this.head = null;
      return temp.value;
    }

    if (this.head.next) {
      let temp = this.head;
      temp.next = this.head.next;
      console.log(temp.next.value);
      this.head = null;
      return temp.value;
    }
  }

  isEmpty() {
    if (this.head) {
      return false;
    }

    return true;
  }

}

// class Queue {

// }

module.exports = Node;
module.exports = Stack;
// module.exports = Queue;
