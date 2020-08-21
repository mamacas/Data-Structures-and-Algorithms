class Stack {

  constructor() {
    // use linked list
    this.store = [];
  }

  peek() {

    if (this.isEmpty()) {
      throw new Error('cannot peek empty stack');
    }

  }

  push(value) {
    this.store.push(value);
    console.log(value);
  }

  pop() {

    if (this.isEmpty()) {
      throw new Error('cannot pop empty stack');
    }
  }

  isEmpty() {
    // if empty (length = 0) return true
    return this.length === 0;
    // if not empty (length > 1) return false
  }

}

module.exports = Stack;
