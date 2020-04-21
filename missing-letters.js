// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

// =========
// OBJECTIVE
// =========

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// ==========
// TEST CASES
// ==========

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

console.clear();

function fearNotLetter(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const splitStr = str.split("");
  const sortedStrList = splitStr.sort();
  const firstLetter = sortedStrList[0];
  const lastLetter = sortedStrList[sortedStrList.length - 1];
  const firstLetterIndex = alphabet.indexOf(firstLetter);
  const lastLetterIndex = alphabet.indexOf(lastLetter);
  let missingLetter = undefined;
  for (let i = firstLetterIndex; i < lastLetterIndex; i++) {
    if (sortedStrList.indexOf(alphabet[i]) === -1) {
      missingLetter = alphabet[i];
    }
  }

  return missingLetter;
}

const missingLetters = {
  1: fearNotLetter("abce"),
  2: fearNotLetter("abcdefghjklmno"),
  3: fearNotLetter("stvwx"),
  4: fearNotLetter("bcdf"),
  5: fearNotLetter("abcdefghijklmnopqrstuvwxyz"),
};

console.log(missingLetters);

/* Output

  { '1': 'd', '2': 'i', '3': 'u', '4': 'e', '5': undefined }

*/
