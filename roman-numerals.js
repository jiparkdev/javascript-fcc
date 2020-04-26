// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

// =========
// OBJECTIVE
// =========

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper -case.

// ==========
// TEST CASES
// ==========

// convertToRoman(2) should return "II".
// convertToRoman(3) should return "III".
// convertToRoman(4) should return "IV".
// convertToRoman(5) should return "V".
// convertToRoman(9) should return "IX".
// convertToRoman(12) should return "XII".
// convertToRoman(16) should return "XVI".
// convertToRoman(29) should return "XXIX".
// convertToRoman(44) should return "XLIV".
// convertToRoman(45) should return "XLV"
// convertToRoman(68) should return "LXVIII"
// convertToRoman(83) should return "LXXXIII"
// convertToRoman(97) should return "XCVII"
// convertToRoman(99) should return "XCIX"
// convertToRoman(400) should return "CD"
// convertToRoman(500) should return "D"
// convertToRoman(501) should return "DI"
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(798) should return "DCCXCVIII"
// convertToRoman(891) should return "DCCCXCI"
// convertToRoman(1000) should return "M"
// convertToRoman(1004) should return "MIV"
// convertToRoman(1006) should return "MVI"
// convertToRoman(1023) should return "MXXIII"
// convertToRoman(2014) should return "MMXIV"
// convertToRoman(3999) should return "MMMCMXCIX"

console.clear();

function convertToRoman(num) {
  let rnum = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let steps = Object.keys(rnum)
    .map((val) => parseInt(val))
    .sort((a, b) => b - a);
  let sub = num;
  let numeral = "";
  for (let z = 0; z < steps.length; z++) {
    if (sub >= steps[z]) {
      let calc = steps[z] * Math.floor(sub / steps[z]);
      sub = sub - calc;
      // console.log(z + 1 + " - sub:", sub, "calc:", calc);
      if (calc in rnum) {
        numeral += rnum[calc];
      } else {
        for (let i = 0; i < calc / steps[z]; i++) {
          numeral += rnum[steps[z]];
        }
      }
    }
  }
  return numeral;
}

let ret = convertToRoman(3999);

console.log(ret);
