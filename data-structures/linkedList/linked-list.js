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

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;

  }

  // add a new node with the given newValue
  // immediately before the val node
  insertBefore(val, newVal) {
    let currentNode = this.head;
    let newNode = new Node(newVal, null);

    if (currentNode.value === val) {
      newNode.next = currentNode;
      this.head = newNode;

      return;
    }

    while(currentNode.next) {

      if (currentNode.next.value === val) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }

      currentNode = currentNode.next;
    }
  }

  // add a new node with the given newValue
  // immediately after the first value node
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

  // return true if provided value exists in array,
  // return false if not
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

  kthFromEnd(k) {
    let currentNode = this.head;
    let length = 0;

    while(currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    let position = length - k;

    if (length <= k || k < 0 || position === 0) {
      return 'exception';
    }

    if (length > k) {

      let current = this.head;
      for (let i = 1; i < position; i++) {
        current = current.next;
      }

      return current.value;
    }

  }
  // -------------
  reverseList() {
    let cur = this.head;
    let prev = null;
    if (!cur) {
      return 'this list is empty';
    }
    if (!cur.next) {
      return cur;
    }

    while(cur) {
      let oldnext = cur.next;
      cur.next = prev;
      prev = cur;
      cur = oldnext;
    }

    this.head = prev;
  }

  // -------------

  palindrome() {
    let cur = this.head;
    let prev = null;
    if (!cur || !cur.next) {
      return true;
    }

    let listArr = [];


    while(cur) {
      listArr.push(cur.value);
      let oldnext = cur.next;
      cur.next = prev;
      prev = cur;
      cur = oldnext;
    }

    this.head = prev;
    console.log('arr: ', listArr);
    //-------
    cur = this.head;
    while(cur) {
      let oppd = listArr.shift();
      // console.log('test: ', oppd);
      // console.log('cur.val', cur.value);

      if (oppd !== cur.value) {
        console.log('false');
        return false;
      }

      cur = cur.next;
    }

    console.log('true');
    return true;

  }

  // -------------

  // convert linked list to string
  // formatted as {head} -> {1} -> {2} -> NULL
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

module.exports = { LinkedList, Node };
