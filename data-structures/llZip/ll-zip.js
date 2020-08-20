'use strict';

const zipLists = (list1, list2) => {

  let cur1 = list1.head;
  let cur2 = list2.head;

  // if both lists contain no values
  if (!cur1 && !cur2) {
    return 'exception';
  }

  // if list 2 contains no values
  if (!cur2) {
    return list1;
  }

  // if list 1 contains no values
  if (!cur1) {
    return list2;
  }

  while (cur1.next && cur2.next) {
    let former1next = cur1.next;
    cur1.next = cur2;

    let former2next = cur2.next;
    cur2.next = former1next;

    cur1 = former1next;
    cur2 = former2next;

  }

  // if lists are the same length, point list 1's last node's next to the last node of list 2
  if (!cur1.next && cur2) {
    cur1.next = cur2;
  }

  // if list 1 is longer than list 2
  if(cur1.next && !cur2.next) {
    cur1.next = cur2;
    // while(cur1.next) {
    //   cur2.next = cur1.next;
    // }
  }

  // if list 2 is longer than list 1
  // if(!cur1.next && cur2.next) {
  //   // do something
  // }

  // console.log('cur1', cur1);
  // console.log('cur2', cur2);

  return list1;


};

module.exports = zipLists;
