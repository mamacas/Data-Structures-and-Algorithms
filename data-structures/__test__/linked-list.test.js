'use strict';

const LinkedList = require('../linkedList/linked-list.js');

it('should instantiate an empty linked list', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

it('should add the provided value to empty list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  expect(ll.head.value).toBe(1);
});

it('should add to list that is not empty', () => {
  const ll = new LinkedList();
  ll.insert(10);
  ll.insert(20);
  expect(ll.head.value).toBe(20);
  expect(ll.head.next.value).toBe(10);
});

it('should append to list that is not empty', () => {
  const ll = new LinkedList();
  ll.insert(10);
  ll.insert(20);
  expect(ll.head.value).toBe(20);
  expect(ll.head.next.value).toBe(10);
});

it('should return true if current node value matches input value', () => {
  const ll = new LinkedList();
  ll.insert(25);
  ll.insert(50);
  expect(ll.includes(25)).toStrictEqual(true);
  expect(ll.includes(50)).toStrictEqual(true);
});

it('should return false if current node value does not match input value', () => {
  const ll = new LinkedList();
  ll.insert(25);
  ll.insert(50);
  expect(ll.includes(99)).toBe(false);
});

it('should return a string representing all values in the linked list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(5);
  ll.insert(10);
  ll.insert(11);
  let string = ll.toString();
  expect(string).toStrictEqual('{11} -> {10} -> {5} -> {2} -> {1} -> NULL');
});

