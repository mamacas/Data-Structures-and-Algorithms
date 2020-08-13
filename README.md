# Data Structures & Algorithms
#### Author: Cas Ibrahim

*** 
***

## Code 301

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

## Code 401

* [arrayReverse](code-challenges/401/arrayReverse/array-reverse.js)
* [arrayShift](code-challenges/401/arrayShift/array-shift.js)
* [arrayBinarySearch](code-challenges/401/arrayBinarySearch/array-binary-search.js)

***

### 1. Reverse an Array (arrayReverse)
Code Challenge : Class 01

#### Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

#### Approach & Efficiency
I chose to create an empty array for my result, then reverse-for-loop through the existing array, popping off each index and pushing it into the result array simultaneously.

#### Solution
![arrayReverse Whiteboard](assets/wb-arrayReverse.png)

***

### 2. Insert and Shift an Array in Middle at Index (arrayShift)
Code Challenge : Class 02

#### Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

#### Approach & Efficiency
* To determine the middle index, I took array.length and divided by two. 
  * In order to handle arrays with uneven lengths (array.length % 2 !== 0), I used Math.ceil to round up to the nearest integer (example output assignment in Canvas indicated I should use ceil, not floor). 
* I chose to create an empty array for my result. 
* Then I for-looped through the input array, pushing the values of each index into the result array until I reached the middle index that was previously defined. 
  * At that point, I pushed the input value into the result array, and continued looping through the input array, continuing to push those values into the result array. 

#### Solution
![arrayShift Whiteboard](/assets/wb-arrayShift.png)

***

### 3. Binary Search in a sorted 1D array
Code Challenge : Class 03

#### Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

#### Approach & Efficiency
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

#### Solution
![arrayBinarySearch Whiteboard](/assets/wb-arraybinarySearch.png)