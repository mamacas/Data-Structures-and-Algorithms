'use strict';

class Node {

  constructor(value, next) {
    // include property for the value stored in the node
    this.value = value;
    // include property for the pointer to the next node
    this.next = next;
    // this.value and this.next are the accepted naming conventions for these properties
  }

}

class LinkedList {

  constructor() {
    // include a head property
    // head is set to null as default value
    this.head = null;
    // upon instantiation, an empty Linked List should be created
  }

  // prepend value to head of list with insert
  insert(value) {
    // takes in any value as an argument
    // adds a new node with that value to the head of the list

    // empty linked list (aka head = null);
    // insert value 'apples'
    // -- create a new Node('apples', null)
    // -- Node: {value: 'apples', next: null}
    // this.head = Node instance above
    // return undefined if no return statement specified

    // linked list with something in it (aka head = 'apples)
    // insert value 'bananas'
    // -- create a new Node('bananas', {value: 'apples', next: null})
    // this.head = the new Node instance
    // return undefined if no return statement specified
    this.head = new Node(value, this.head);

  }

  // {a} -> {b} -> {c} -> NULL
  // append d so that outcome is:
  // {a} -> {b} -> {c} -> {d} -> NULL
  appendToEnd(value) {

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

    // takes in any value as an argument
    let currentNode = this.head;
    while (currentNode.value) {
      if (currentNode.value === value) {
        currentNode = currentNode.next;
        return true;
      } else {
        return false;
      }
    }
    // returns a boolean result depending on whether that value exists as a Node's value somewhere within the list
  }

  toString() {
    // takes in no arguments
    // returns a string representing all the values in linked list
    let valArr = [];
    let currentNode = this.head;

    while (currentNode) {

      valArr.push(currentNode.value);
      currentNode = currentNode.next;

    }

    console.log(valArr);
    return valArr;

    // formatted as '{a} -> {b} -> {c} -> NULL'
  }

}

module.exports = LinkedList;
