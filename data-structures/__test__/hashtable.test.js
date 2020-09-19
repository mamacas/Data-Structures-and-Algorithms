'use strict';

const Hashtable = require('../hashtable/hashtable.js');
// const Hashtable = require('../hashtable/hashtable.js');

describe('Hashtable', () => {

  it('Recognizes a new Table and its properties', () => {
    const table = new Hashtable(1024);
    expect(table.buckets.length).toBe(1024);
  });

  it('Can add a key/value to your hashtable', () => {
    const table = new Hashtable(1024);
    table.add('sample', 'testvalue');
    const index = table.hash('sample');
    const value = table.buckets[index];
    expect(value).toEqual([['sample', 'testvalue']]);
  });

  it('Returns the proper value when retrieving based on the key', () => {
    const table = new Hashtable(1024);
    table.add('sample', 'testvalue');
    const value = table.get('sample');
    expect(value).toBe('testvalue');
  });

  it('Returns null for a key that does not exist in the hashtable', () => {
    const table = new Hashtable(1024);
    const result = table.get('getnothing');
    expect(result).toBe(null);
  });

  it('Retrieves a value from a bucket within the hashtable that has a collision', () => {
    const table = new Hashtable(1024);
    table.add('key', 'value');
    table.add('eky', 'valuetwo');
    const grab = table.get('key');
    expect(grab).toEqual('value');
  });

  it('Successfully hashes a key to an in-range value', () => {
    const table = new Hashtable(1024);
    const index = table.hash('thiskey is much longer than the others');
    expect(index).toBeLessThan(1024);
  });



});
