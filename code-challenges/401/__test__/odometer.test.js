'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list.js').LinkedList;
const odometer = require('../odometer/odometer.js').odometer;

describe('odometer', () => {

  it('should increase the odometer by 1 for each mile traveled when the last digit is not 9', () => {
    const list = new LinkedList();

    list.insert(5);
    list.append(3);
    list.append(8);
    list.append(2);

    let result = odometer(list);
    expect(result.head.value).toEqual(5);
    expect(result.head.next.value).toEqual(3);
    expect(result.head.next.next.value).toEqual(8);
    expect(result.head.next.next.next.value).toEqual(3);

  })

  it('should successfully increase the odometer by 1 when the last digit is 9', () => {
    const list = new LinkedList();

    list.insert(5);
    list.append(3);
    list.append(8);
    list.append(9);

    let result = odometer(list);
    expect(result.head.value).toEqual(5);
    expect(result.head.next.value).toEqual(3);
    expect(result.head.next.next.value).toEqual(9);
    expect(result.head.next.next.next.value).toEqual(0);

  })

  it('should successfully increase the odometer by 1 when all digits are 9', () => {
    const list = new LinkedList();

    list.insert(1);
    list.append(9);
    list.append(9);

    let result = odometer(list);
    expect(result.head.value).toEqual(2);
    expect(result.head.next.value).toEqual(0);
    expect(result.head.next.next.value).toEqual(0);
    // expect(result.head.next.next.next.value).toEqual(0);

  });

  it('should successfully increase the odometer by 1 when all digits are 9', () => {
    const list = new LinkedList();

    list.insert(9);
    list.append(9);
    list.append(9);

    let result = odometer(list);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(0);
    expect(result.head.next.next.value).toEqual(0);
    expect(result.head.next.next.next.value).toEqual(0);

  });

});
