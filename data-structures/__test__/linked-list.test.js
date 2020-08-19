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

it('should add to the beginning of a list that is not empty', () => {
  const ll = new LinkedList();
  ll.insert(10);
  ll.insert(20);
  expect(ll.head.value).toBe(20);
  expect(ll.head.next.value).toBe(10);
});

it('should append to the end of a list that is not empty', () => {
  const ll = new LinkedList();
  ll.insert(10);
  ll.insert(20);
  ll.append(55);
  expect(ll.head.value).toBe(20);
  expect(ll.head.next.value).toBe(10);
  expect(ll.head.next.next.value).toBe(55);
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
  ll.append(100);
  ll.append(200);
  let string = ll.toString();
  expect(string).toStrictEqual('{11} -> {10} -> {5} -> {2} -> {1} -> {100} -> {200} -> NULL');
});

it('should successfully insert a node after a node located in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  ll.insertAfter(2, 22);
  let string = ll.toString();
  expect(string).toStrictEqual('{3} -> {2} -> {22} -> {1} -> NULL');
});

it('should successfully insert a node after the last node of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(1);
  ll.insert(2);
  ll.insert(3);
  ll.insertAfter(1, 22);
  let string = ll.toString();
  expect(string).toStrictEqual('{3} -> {2} -> {1} -> {22} -> NULL');
});

it('should successfully insert before a node in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(22);
  ll.insert(39);
  ll.insert(70);
  ll.insert(95);
  ll.insertBefore(39, 50);

  let string = ll.toString();
  expect(string).toStrictEqual('{95} -> {70} -> {50} -> {39} -> {22} -> NULL');
});

it('should successfully insert a node before the first node of the linked list', () => {
  const ll = new LinkedList();
  ll.insert(2);
  ll.insert(1);
  ll.insertBefore(1, 11);
  let string = ll.toString();
  expect(string).toStrictEqual('{11} -> {1} -> {2} -> NULL');
});

it('should return the value of the node at the kth position from the end of the list', () => {
  const ll = new LinkedList();
  ll.insert(2);
  ll.insert(1);
  ll.insert(5);
  ll.insert(10);
  ll.insert(4);
  ll.insert(8);
  // k is somewhere in list
  expect(ll.kthFromEnd(3)).toStrictEqual(10);
  // k is last node in list
  expect(ll.kthFromEnd(0)).toStrictEqual(2);
  // k is first node in list
  expect(ll.kthFromEnd(5)).toStrictEqual(8);
  // k is greater than list length
  expect(ll.kthFromEnd(10)).toStrictEqual('exception');
  // k is negative integer
  expect(ll.kthFromEnd(-2)).toStrictEqual('exception');
  // k = list length
  expect(ll.kthFromEnd(6)).toStrictEqual('exception');
});

it('should return the value of the node at the kth position from the end of the list when the list length is 1', () => {
  const ll = new LinkedList();
  ll.insert(2);
  expect(ll.kthFromEnd(0)).toStrictEqual(2);
  expect(ll.kthFromEnd(1)).toStrictEqual('exception');
});
