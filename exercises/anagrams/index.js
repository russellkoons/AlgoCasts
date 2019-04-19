// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return sortString(stringA) === sortString(stringB);
}

function sortString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// First Solution
// function anagrams(stringA, stringB) {
//   const a = charMap(stringA);
//   const b = charMap(stringB);

//   if (Object.keys(a).length !== Object.keys(b).length) {
//     return false;
//   }

//   for(let char in a) {
//     if (a[char] !== b[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function charMap(str) {
//   const charMap = {};
//   const string = str.replace(/[^\w]/g, '').toLowerCase();
//   for (let char of string) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }