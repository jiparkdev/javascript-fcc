// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

// =========
// OBJECTIVE
// =========

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// ==========
// TEST CASES
// ==========

// convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") should return Schindler&apos;s List.
// convertHTML("<>") should return &lt;&gt;.
// convertHTML("abc") should return abc.

console.clear();

function numChars(char, str) {
  const tempStr = str.slice();
  // Get number of a char within a string.
  let count = 0;
  for (let i = 0; i < tempStr.length; i++) {
    if (char === tempStr[i]) {
      count++;
    }
  }
  return count;
}

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  const chars = ["&", "<", ">", '"', "'"];
  let tstr = str.slice();
  for (let char of chars) {
    let tracker = 0;
    const count = numChars(char, tstr);
    if (count === 0) {
      continue;
    }
    do {
      const idx = tstr.indexOf(char);
      const str1 = tstr.slice(0, idx);
      const str2 = tstr.slice(idx + 1);
      tstr = str1 + entities[char] + str2;
      tracker++;
    } while (tracker < count);
  }
  return tstr;
}

const output = [
  convertHTML("Dolce & Gabbana"),
  convertHTML("Hamburgers < Pizza < Tacos"),
  convertHTML("Sixty > twelve"),
  convertHTML('Stuff in "quotation marks"'),
  convertHTML("Schindler's List"),
  convertHTML("<>"),
  convertHTML("abc"),
];

console.log(output);

/* Output

[ 
  'Dolce &amp; Gabbana',
  'Hamburgers &lt; Pizza &lt; Tacos',
  'Sixty &gt; twelve',
  'Stuff in &quot;quotation marks&quot;',
  'Schindler&apos;s List',
  '&lt;&gt;',
  'abc'
]
  
*/
