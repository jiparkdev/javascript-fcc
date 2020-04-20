// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".

function spinalCase(str) {
  let regex1 = /[\s_-]/g;
  let splitted = str.split(regex1);
  let newStr = splitted.join(" ");
  let regex2 = /[A-Z]/g;
  let words = [];
  let tempStartIndex = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (regex2.test(newStr[i]) || i === newStr.length - 1) {
      if (i === newStr.length - 1) {
        words.push(newStr.slice(tempStartIndex));
      } else {
        words.push(newStr.slice(tempStartIndex, i));
        tempStartIndex = i;
      }
    }
  }
  let splittedWords = words.join(" ").split(" ");
  let preFinalWords = splittedWords.filter((val) => {
    return val !== "";
  });
  const finalStr = preFinalWords.join("-").toLowerCase();
  return finalStr;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
