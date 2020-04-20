// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

// =========
// OBJECTIVE
// =========

// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// ==========
// TEST CASES
// ==========

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".

function translatePigLatin(str) {
  const vowelRegex = /[aeiou]/gi;
  // If the first letter starts with a consonant.
  if (!vowelRegex.test(str[0])) {
    let coCluster = "";
    let coEndIndex = 0;
    // Get the consonant cluster.
    for (let i = 0; i < str.length; i++) {
      if (vowelRegex.test(str[i])) {
        coEndIndex = i;
        break;
      }
      coCluster += str[i];
    }
    // If there is not a single vowel.
    // Just add "ay" at the end.
    if (coCluster === str) {
      return str + "ay";
    }
    // Return the consonant cluster moved to the end with "ay" at the end.
    const sliced = str.slice(coEndIndex);
    const coWord = sliced + coCluster + "ay";
    return coWord;
  } else {
    // If the first letter is a vowel.
    // Just add "way" at the end.
    return str + "way";
  }
}

translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("schwartz");
translatePigLatin("rhythm");
