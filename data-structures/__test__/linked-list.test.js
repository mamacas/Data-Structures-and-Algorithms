'use strict';

const LinkedList = require('../linkedList/linked-list.js');

it('should instantiate an empty linked list', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

it('should add the provided value to empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
});

it('should add to list that is not empty', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
});

it('should append to an empty list', () => {
  const ll = new LinkedList();
  ll.appendToEnd('oranges');
  expect(ll.head.value).toBe('oranges');
});

it('should append to list that is not empty', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.appendToEnd('oranges');
  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');
  expect(ll.head.next.next.value).toBe('oranges');
});

it('should return true if current node value matches input value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.appendToEnd('oranges');
  expect(ll.includes('bananas')).toBe(true);
});

it('should return false if current node value does not match input value', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  ll.appendToEnd('oranges');
  expect(ll.includes('kiwi')).toBe(false);
});

it('should push all values into valArr', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.appendToEnd(5);
  let arr = ll.toString();
  expect(arr).toStrictEqual([2, 1, 5]);
});

