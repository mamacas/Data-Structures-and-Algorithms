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

  // append value to end of list
  append(value) {

    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    // while loop looks for node whose next is null
    let currentNode = this.head;

    while (currentNode.next) {
      // reassign current node to the next node
      currentNode = currentNode.next;
    }
    // when we reach the node whose next is null, reassign next value to node we want to add
    currentNode.next = newNode;

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

  // add a new node with the given newValue immediately before the val node
  insertBefore(val, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal, null);

    while(currentNode.next) {

      // if (currentNode.value === val) {
      //   newNode.next = currentNode;
      //   currentNode = currentNode.next;

      //   break;
      // }

      if (currentNode.next.value === val) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        break;
      }

      currentNode = currentNode.next;
    }

  }

  // add a new node with the given newValue immediately after the first value node
  insertAfter(val, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal, null);

    while(currentNode) {
      if (currentNode.value === val) {

        newNode.next = currentNode.next;

        currentNode.next = newNode;

        break;
      }
      currentNode = currentNode.next;
    }
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
