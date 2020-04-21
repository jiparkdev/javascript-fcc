// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// =========
// OBJECTIVE
// =========

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// ==========
// TEST CASES
// ==========

// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function pairElement(str) {
  const splitStr = str.split("");
  const basePairs = splitStr.map((val) => {
    switch (val) {
      case "A":
        return [val, "T"];
        break;
      case "T":
        return [val, "A"];
        break;
      case "C":
        return [val, "G"];
        break;
      case "G":
        return [val, "C"];
        break;
    }
  });
  return basePairs;
}

const pairedElements = {
  one: pairElement("ATCGA"),
  two: pairElement("TTGAG"),
  three: pairElement("CTCTA"),
};

console.log(pairedElements);

/* Output
{ one: 
   [ [ 'A', 'T' ],
     [ 'T', 'A' ],
     [ 'C', 'G' ],
     [ 'G', 'C' ],
     [ 'A', 'T' ] ],
  two: 
   [ [ 'T', 'A' ],
     [ 'T', 'A' ],
     [ 'G', 'C' ],
     [ 'A', 'T' ],
     [ 'G', 'C' ] ],
  three: 
   [ [ 'C', 'G' ],
     [ 'T', 'A' ],
     [ 'C', 'G' ],
     [ 'T', 'A' ],
     [ 'A', 'T' ] ] }
*/
