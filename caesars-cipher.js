// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

// =========
// OBJECTIVE
// =========

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase.Do not transform any non - alphabetic character(i.e.spaces, punctuation), but do pass them on.

// ==========
// TEST CASES
// ==========

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
// rot13("SERR YBIR?") should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

const chars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function shiftChar(char) {
  let idx = chars.indexOf(char);
  if (idx + 13 >= chars.length) {
    idx = idx + 13 - chars.length;
  } else {
    idx = idx + 13;
  }
  return chars[idx];
}

function rot13(str) {
  let regex = /[A-Z]/;
  let split = str.split("");
  for (let i = 0; i < split.length; i++) {
    if (regex.test(split[i])) {
      split[i] = shiftChar(split[i]);
    }
  }
  split = split.join("");
  return split;
}

let ret = rot13("SERR PBQR PNZC");

console.log(ret);
