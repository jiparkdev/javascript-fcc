// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

// =========
// OBJECTIVE
// =========

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

// ==========
// TEST CASES
// ==========

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true
// truthCheck([{"single": "yes"}], "single") should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false

console.clear();

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!(pre in collection[i])) {
      return false;
    }
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

let res = [
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  ),
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  ),
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 },
    ],
    "age"
  ),
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastForward", onBoat: null },
    ],
    "onBoat"
  ),
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastForward", onBoat: true },
    ],
    "onBoat"
  ),
  truthCheck([{ single: "yes" }], "single"),
  truthCheck([{ single: "" }, { single: "double" }], "single"),
  truthCheck([{ single: "double" }, { single: undefined }], "single"),
  truthCheck([{ single: "double" }, { single: NaN }], "single"),
];

console.log(res);
