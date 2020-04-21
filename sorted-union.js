// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

// =========
// OBJECTIVE
// =========

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// ==========
// TEST CASES
// ==========

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

console.clear();

function uniteUnique(...arr) {
  let u = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (u.indexOf(arr[i][j]) === -1) {
        u.push(arr[i][j]);
      }
    }
  }
  return u;
}

const res = [
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
  uniteUnique([1, 2, 3], [5, 2, 1]),
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]),
];

console.log(res);

/* Output

  [ [ 1, 3, 2, 5, 4 ], [ 1, 2, 3, 5 ], [ 1, 2, 3, 5, 4, 6, 7, 8 ] ]

*/
