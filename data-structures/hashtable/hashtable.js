'use strict';

class HashTable {

  constructor() {
    this.table = [];
  }

  add(key, value) {
    // hash the key
    // add key:value pair to the table
    // handle collisions
    console.log(key, value);
  }

  get(key) {
    // return value matched to key
    console.log(key);
  }

  contains(key) {
    // return a boolean indicating whether
    // the key already exists in the table
    console.log(key);
  }

  hash(key) {
    // return the index associated with key
    console.log(key);
  }

}

module.exports = HashTable;
