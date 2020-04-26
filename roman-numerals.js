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

function convertToRoman(num) {
  let sub = num;
  let numeral = "";
  if (sub >= 1000) {
    let calc = 1000 * Math.floor(sub / 1000);
    sub = sub - calc;
    console.log("1 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 1000; i++) {
        numeral += rnum[1000];
      }
    }
  }
  if (sub >= 900) {
    let calc = 900 * Math.floor(sub / 900);
    sub = sub - calc;
    console.log("2 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 900; i++) {
        numeral += rnum[900];
      }
    }
  }
  if (sub >= 500) {
    let calc = 500 * Math.floor(sub / 500);
    sub = sub - calc;
    console.log("3 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 500; i++) {
        numeral += rnum[500];
      }
    }
  }
  if (sub >= 100) {
    let calc = 100 * Math.floor(sub / 100);
    sub = sub - calc;
    console.log("4 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 100; i++) {
        numeral += rnum[100];
      }
    }
  }

  if (sub >= 90) {
    let calc = 90 * Math.floor(sub / 90);
    sub = sub - calc;
    console.log("5 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 90; i++) {
        numeral += rnum[90];
      }
    }
  }

  if (sub >= 50) {
    let calc = 50 * Math.floor(sub / 50);
    sub = sub - calc;
    console.log("6 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 50; i++) {
        numeral += rnum[50];
      }
    }
  }

  if (sub >= 10) {
    let calc = 10 * Math.floor(sub / 10);
    sub = sub - calc;
    console.log("7 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 10; i++) {
        numeral += rnum[10];
      }
    }
  }

  if (sub >= 5 && sub < 9) {
    let calc = 5 * Math.floor(sub / 5);
    sub = sub - calc;
    console.log("8 - sub:", sub, "calc:", calc);
    if (calc in rnum) {
      numeral += rnum[calc];
    } else {
      for (let i = 0; i < calc / 5; i++) {
        numeral += rnum[5];
      }
    }
  }

  console.log("sub:", sub);
  if (sub in rnum) {
    numeral += rnum[sub];
  } else {
    for (let i = 0; i < sub; i++) {
      numeral += rnum[1];
    }
  }
  return numeral;
}

let ret = convertToRoman(68);

console.log(ret);
