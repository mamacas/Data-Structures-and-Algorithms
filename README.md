# Data Structures & Algorithms
#### Author: Cas Ibrahim

*** 
### Data Structures

* [linkedList](data-structures/linkedList/linked-list.js)

#### 1.0 Singly Linked List (insert, includes, toString)
Code Challenge : Class 05

##### Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    * Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
    * Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
    * Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: 
    `{ a } -> { b } -> { c } -> NULL`

##### API
* insert(value)
    * takes in any value
    * adds a new node with that value to the head of the list
* includes(value)
    * takes in any value and returns a boolean
    * returns true if value exists in the linked list
    * returns false if value does not exist in the linked list
* toString()
    * takes in no arguments
    * returns a string representing all the values in the linked list
    
*** 

#### 1.1 Singly Linked List (append, insertBefore, insertAfter)
Code Challenge : Class 06

##### Challenge
* Within your LinkedList class, add the following methods:
    * append(value) which adds a new note with the given val to the end of the linked list
    * insertBefore(value, newValue) which adds a new note with the given newValue immediately before the node with the existing value
    * insertAfter(value, newValue), which adds a new node with the given newValue immediately after the node with the existing value

##### API
* append(value)
    * takes in any value
    * adds a new node with that value to the end of the list
* insertBefore(value, newValue)
    * takes in an existing value and a new value
    * adds a new node with the new value to the linked list, directly before the node with the existing value
* insertAfter(value, newValue)
    * takes in an existing value and a new value
    * adds a new node with the new value to the linked list, directly after the node with the existing value

##### Solution
![linkedList1.1](assets/wb-linkedList2.png)

***

#### 1.2 Singly Linked List (kthFromEnd)
Code Challenge : Class 07

##### Challenge
* Within your LinkedList class, add method kthFromEnd which takes a number (k) as a parameter, Return the node's value that is k from the end of the linked list.

##### API
* kthFromEnd(k)
    * takes in any integer
    * return the value of the node that is in the kth position from the end of the list

##### Solution
![linkedList1.2](assets/wb-linkedList3.jpg)

***

### Code 301

* [for-each](code-challenges/301/for-each/challenges-01.test.js)
* [value-vs-reference](code-challenges/301/value-vs-reference/challenges-02.test.js)
* [sort](code-challenges/301/sort/challenges-03.test.js)
* [regex](code-challenges/301/regex/challenges-04.test.js)
* [chal5](code-challenges/301/chal5/challenges-05.test.js)
* [chal6](code-challenges/301/chal6/challenges-06.test.js)
* [map](code-challenges/301/map/challenges-07.test.js)
* [filter](code-challenges/301/filter/challenges-08.test.js)
* [reduce](code-challenges/301/reduce/challenges-09.test.js)
* [string](code-challenges/301/string/challenges-10.test.js)
* [regextwo](code-challenges/301/regextwo/challenges-11.test.js)
* [2d-arrays](code-challenges/301/2d-arrays/challenges-12.test.js)
* [includes](code-challenges/301/includes/challenges-13.test.js)
* [combo](code-challenges/301/combo/challenges-14.test.js)

*** 

### Code 401

* [arrayReverse](code-challenges/401/arrayReverse/array-reverse.js)
* [arrayShift](code-challenges/401/arrayShift/array-shift.js)
* [arrayBinarySearch](code-challenges/401/arrayBinarySearch/array-binary-search.js)


#### 1. Reverse an Array (arrayReverse)
Code Challenge : Class 01

##### Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

##### Approach & Efficiency
I chose to create an empty array for my result, then reverse-for-loop through the existing array, popping off each index and pushing it into the result array simultaneously.

##### Solution
![arrayReverse Whiteboard](assets/wb-arrayReverse.png)

***

#### 2. Insert and Shift an Array in Middle at Index (arrayShift)
Code Challenge : Class 02

##### Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

##### Approach & Efficiency
* To determine the middle index, I took array.length and divided by two. 
  * In order to handle arrays with uneven lengths (array.length % 2 !== 0), I used Math.ceil to round up to the nearest integer (example output assignment in Canvas indicated I should use ceil, not floor). 
* I chose to create an empty array for my result. 
* Then I for-looped through the input array, pushing the values of each index into the result array until I reached the middle index that was previously defined. 
  * At that point, I pushed the input value into the result array, and continued looping through the input array, continuing to push those values into the result array. 

##### Solution
![arrayShift Whiteboard](/assets/wb-arrayShift.png)

***

#### 3. Binary Search in a sorted 1D array
Code Challenge : Class 03

##### Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

##### Approach & Efficiency
* To begin performing a binary search, I captured my start index and end index in variables, then used them to find the middle index. 
* Next I tested whether the search key (hereinafter referred to as 'x') was equal to the start index value or the end index value. If neither, I tested whether the search key was equal to the middle index value. If no, then I proceeded:
* While x != middle index value, I tested whether:
    1.  start index value < x < middle index value
        * If so : `middle = end` , `middle = (end-start/2)+start`
    2.  middle index value < x < end index value
        * If so : `start = middle` , `middle = (start-end/2)+start`
* This code will repeat until x = middle index value,
* At which point I returned the middle index.
* If x is not included in the array, I returned -1

##### Solution
![arrayBinarySearch Whiteboard](/assets/wb-arrayBinarySearch.png)
