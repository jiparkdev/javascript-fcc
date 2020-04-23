// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// =========
// OBJECTIVE
// =========

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// ==========
// TEST CASES
// ==========

// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.

console.clear();

function fib(arr, limit) {
  if (arr[arr.length - 2] + arr[arr.length - 1] > limit) {
    return arr;
  }
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return fib(arr, limit);
}

function sumOdds(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
    }
  }
  return sum;
}

function sumFibs(num) {
  const fibbi = fib([1, 1], num);
  const sumNum = sumOdds(fibbi);
  return sumNum;
}

const results = [
  sumFibs(1),
  sumFibs(1000),
  sumFibs(4000000),
  sumFibs(4),
  sumFibs(75024),
  sumFibs(75025),
];

console.log(results);

/* Output

  [ 2, 1785, 4613732, 5, 60696, 135721 ]

*/
