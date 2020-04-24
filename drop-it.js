// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// =========
// OBJECTIVE
// =========

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// ==========
// TEST CASES
// ==========

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

console.clear();

function dropElements(arr, func) {
  let index = 0;
  while (arr.length > 0) {
    let num = arr[index];
    let sat = func(num);
    if (sat) {
      return arr;
    }
    arr.shift();
  }
  return arr;
}

let res = [
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
];

console.log(res);
