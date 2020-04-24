// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// =========
// OBJECTIVE
// =========

// Flatten a nested array. You must account for varying levels of nesting.

// ==========
// TEST CASES
// ==========

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  let ff = [];
  function recur(rr) {
    for (let i = 0; i < rr.length; i++) {
      if (Array.isArray(rr[i])) {
        recur(rr[i]);
      } else {
        ff.push(rr[i]);
      }
    }
  }
  recur(arr);
  return ff;
}

let res = [
  steamrollArray([[["a"]], [["b"]]]),
  steamrollArray([1, [2], [3, [[4]]]]),
  steamrollArray([1, [], [3, [[4]]]]),
  steamrollArray([1, {}, [3, [[4]]]]),
];

console.log(res);

/* Output

  [ [ 'a', 'b' ], [ 1, 2, 3, 4 ], [ 1, 3, 4 ], [ 1, {}, 3, 4 ] ]

*/
