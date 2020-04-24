// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

// =========
// OBJECTIVE
// =========

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.

// ==========
// TEST CASES
// ==========

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.

function genRange(arr) {
  let nArr = arr.slice();
  let xArr = nArr.sort((a, b) => a - b);
  let zArr = [];
  let counter = xArr[0];
  while (counter <= xArr[1]) {
    zArr.push(counter);
    counter++;
  }
  return zArr;
}

function sumAll(arr) {
  let range = genRange(arr);
  const sum = range.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return sum;
}
