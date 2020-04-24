// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

// =========
// OBJECTIVE
// =========

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// ==========
// TEST CASES
// ==========

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.

console.clear();

function addTogether() {
  if (arguments.length === 1) {
    if (!(typeof arguments[0] === "number")) {
      return;
    }
    let f = (arg) => {
      if (!(typeof arg === "number")) {
        return;
      }
      return arguments[0] + arg;
    };
    return f;
  }
  for (let ag of arguments) {
    if (!(typeof ag === "number")) {
      return;
    }
  }
  return arguments[0] + arguments[1];
}

let res = [
  addTogether(2, 3),
  addTogether(2)(3),
  addTogether("http://bit.ly/IqT6zt"),
  addTogether(2, "3"),
  addTogether(2)([3]),
];

console.log(res);

/* Output

  [ 5, 5, undefined, undefined, undefined ]

*/
