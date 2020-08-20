'use strict';

const LinkedList = require('../linkedList/linked-list.js');
const zipLists = require('../llZip/ll-zip.js');

it.skip('should recognize two linked lists', () => {
  const ll1 = new LinkedList();
  ll1.insert('z');
  ll1.insert('y');
  ll1.insert('x');
  const ll2 = new LinkedList();
  ll2.insert('c');
  ll2.insert('b');
  ll2.insert('a');

  let string1 = ll1.toString();
  let string2 = ll2.toString();
  expect(string1).toStrictEqual('{x} -> {y} -> {z} -> NULL');
  expect(string2).toStrictEqual('{a} -> {b} -> {c} -> NULL');
});

it('should only return list 1 if list 2 is empty', () => {
  const ll1 = new LinkedList();
  ll1.insert('z');
  ll1.insert('y');
  ll1.insert('x');
  const ll2 = new LinkedList();

  let string = (zipLists(ll1, ll2).toString());
  expect(string).toStrictEqual('{x} -> {y} -> {z} -> NULL');
});

it('should only return list 2 if list 1 is empty', () => {
  const ll2 = new LinkedList();
  ll2.insert('c');
  ll2.insert('b');
  ll2.insert('a');
  const ll1 = new LinkedList();

  let string = (zipLists(ll1, ll2).toString());
  expect(string).toStrictEqual('{a} -> {b} -> {c} -> NULL');
});

it('should return an exception if both lists are empty', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  let string = (zipLists(ll1, ll2).toString());
  expect(string).toStrictEqual('exception');
});

it('should merge two linked lists of the same length', () => {
  // Create First LinkedList
  const ll1 = new LinkedList();
  ll1.insert('z');
  ll1.insert('y');
  ll1.insert('x');
  // Create Second LinkedList
  const ll2 = new LinkedList();
  ll2.insert('c');
  ll2.insert('b');
  ll2.insert('a');

  // convert the output of function zipLists to a string
  let string = (zipLists(ll1, ll2).toString());
  expect(string).toStrictEqual('{x} -> {a} -> {y} -> {b} -> {z} -> {c} -> NULL');

});

it('should merge both lists when list 1 is longer than list 2', () => {
  const ll1 = new LinkedList();
  ll1.insert('z');
  ll1.insert('y');
  ll1.insert('x');
  ll1.insert('w');
  ll1.insert('v');
  const ll2 = new LinkedList();
  ll2.insert('c');
  ll2.insert('b');
  ll2.insert('a');

  let string = (zipLists(ll1, ll2).toString());
  expect(string).toStrictEqual('{v} -> {a} -> {w} -> {b} -> {x} -> {c} -> {y} -> {z} -> NULL');
});

it.skip('should merge both lists when list 2 is longer than list 1', () => {
  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  let string = (zipLists(ll1, ll2).toString());
  expect(string).toStrictEqual('{x} -> {a} -> {y} -> {b} -> {z} -> {c} -> NULL');
});
