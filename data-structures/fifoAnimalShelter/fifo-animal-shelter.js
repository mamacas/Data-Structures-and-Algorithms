'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    if (!this.rear) {
      let temp = new Node(animal, null);
      this.front = temp;
      this.rear = temp;
      return;
    }

    let temp = new Node(animal, null);
    this.rear.next = temp;
    this.rear = temp;
  }

  dequeue(pref) {

    // if the queue is empty
    if (!this.rear) {
      throw new Error('cannot dequeue from an empty queue');
    }

    let temp = this.front;

    // if only one animal in queue &
    // animal type matches input pref
    if (!this.front.next && this.front.value === pref) {
      this.front = null;
      return temp.value;
    }

    // if only one animal in queue &
    // animal type does not match input pref
    if (!this.front.next && this.front.value !== pref) {
      return null;
    }

    // if more than one animal in queue &
    // animal type at the front node matches input pref
    if (this.front.next && this.front.value === pref) {
      this.front = this.front.next;
      return temp.value;
    }

    // if more than one animal in queue &
    // animal type at the front does not match input pref
    if (this.front.next && this.front.value !== pref) {
      while (this.front.value !== pref) {
        this.front = this.front.next;
      }
      return this.front.value;
    }

    // if the value passed for pref is
    // neither a cat nor a dog
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }

  }

}

module.exports = AnimalShelter;
