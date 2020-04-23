// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

// =========
// OBJECTIVE
// =========

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// ==========
// TEST CASES
// ==========

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

console.clear();

function genRange(arr) {
  let range = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }
  return range;
}

function smallestCommons(arr) {
  let sliced = arr.slice();
  let sorted = sliced.sort((a, b) => {
    return a - b;
  });
  let range = genRange(sorted);
  let scm = false;
  let num = 1;
  while (!scm) {
    scm = range.every((val) => {
      return num % val === 0;
    });
    if (!scm) {
      num++;
    }
  }
  return num;
}

let result = [
  smallestCommons([1, 5]),
  smallestCommons([5, 1]),
  smallestCommons([2, 10]),
  smallestCommons([1, 13]),
  smallestCommons([23, 18]),
];

console.log(result);

/* Output

  [ 60, 60, 2520, 360360, 6056820 ]

*/
