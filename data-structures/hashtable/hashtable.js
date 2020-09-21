'use strict';

class Hashtable {

  constructor(size=1024) {
    this.buckets = new Array(size);
  }

  add(key, value) {
    // hash the key
    const index = this.hash(key);
    // handle collisions
    const contents = this.buckets[index];

    // add key:value pair to the table
    if (contents === undefined) {
      this.buckets[index] = [ [key, value] ];
    } else {
      contents.push([key, value]);
    }

  }

  get(key) {
    // hash the key
    const index = this.hash(key);
    // return value matched to key
    const items = this.buckets[index];

    if (items === undefined) {
      return null;
    } else {
      for (let item of items) {
        if(item[0] === key) {
          return item[1];
        }
      }
    }
  }

  contains(key) {
    // return a boolean indicating whether
    // the key already exists in the table

    const index = this.hash(key);

    if (this.buckets[index] === undefined) {
      return false;
    }

    if (this.buckets[index]) {
      return true;
    }
  }

  hash(key) {
    // takes in an arbitrary key (string)
    // returns the index to be associated with the hashed key (integer)

    let sum = 0;
    for (let char of key) {
      sum += char.charCodeAt(char);
    }

    let index = ((sum * 599) % this.buckets.length);

    return index;

  }

}

module.exports = Hashtable;
