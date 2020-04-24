// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

// =========
// OBJECTIVE
// =========

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method.The methods that take an argument must accept only one argument and it has to be a string.These methods must be the only available means of interacting with the object.

// ==========
// TEST CASES
// ==========

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

var Person = function (firstAndLast) {
  this.getFirstName = function () {
    if (this.first) {
      return this.first;
    }
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    if (this.last) {
      return this.last;
    }
    return firstAndLast.split(" ")[1];
  };
  this.getFullName = function () {
    if (this.first && !this.last) {
      return this.first + " " + firstAndLast.split(" ")[1];
    }
    if (this.last && !this.first) {
      return firstAndLast.split(" ")[0] + " " + this.last;
    }
    if (this.first && this.last) {
      return this.first + " " + this.last;
    }
    return firstAndLast;
  };
  this.setFirstName = function (fname) {
    this.first = fname;
  };
  this.setLastName = function (lname) {
    this.last = lname;
  };
  this.setFullName = function (flname) {
    this.first = flname.split(" ")[0];
    this.last = flname.split(" ")[1];
    this.firstAndLast = flname;
  };
};

var bob = new Person("Bob Ross");

console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);

console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

bob.setFirstName("Haskell");
console.log(bob.getFullName());

bob.setLastName("Curry");
console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getFullName());

bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());

bob.setFullName("Haskell Curry");
console.log(bob.getLastName());

/* Output

  6
  true
  undefined
  undefined
  Bob
  Ross
  Bob Ross
  Haskell Ross
  Haskell Curry
  Haskell Curry
  Haskell
  Curry

*/
