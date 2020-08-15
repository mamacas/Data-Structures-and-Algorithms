'use strict';

class Node {

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

}

class LinkedList {

  constructor() {
    this.head = null;
  }

  // prepend value to head of list
  insert(value) {
    this.head = new Node(value, this.head);
  }

  includes(value) {
    let currentNode = this.head;

    while (currentNode) {

      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;

  }

  toString() {
    let valArr = [];
    let currentNode = this.head;

    while (currentNode) {

      valArr.push(currentNode.value);
      currentNode = currentNode.next;

    }

    let string = '';

    for (let i = 0; i < valArr.length; i++) {
      string += `{${valArr[i]}} -> `;
    }

    let statement = (string + 'NULL');
    return statement;
  }

}

module.exports = LinkedList;
