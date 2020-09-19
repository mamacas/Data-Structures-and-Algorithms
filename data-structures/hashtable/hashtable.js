'use strict';

class Hashtable {

  constructor(size=1024) {
    this.buckets = new Array(size);
    // console.log('this.buckets.length:', this.buckets.length);
  }

  add(key, value) {
    // hash the key
    const index = this.hash(key);
    console.log(index);
    // handle collisions
    const contents = this.buckets[index];

    // add key:value pair to the table
    if (contents === undefined) {
      this.buckets[index] = [ [key, value] ];
      // console.log(this.buckets[index][0][1]);
      console.log(this.buckets[index]);
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
    // return the index to be associated with the hashed key (integer)

    let sum = 0;
    for (let char of key) {
      sum += char.charCodeAt(char);
    }

    let index = ((sum * 599) % this.buckets.length);

    if(index < this.buckets.length) {
      return index;
    }

    if (index > this.buckets.length || index === 0) {
      let resolved = Math.floor(Math.random() * this.buckets.length);
      return resolved;
    }

  }

}

module.exports = Hashtable;
