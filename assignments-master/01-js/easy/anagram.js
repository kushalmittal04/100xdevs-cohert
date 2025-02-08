/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   const temp1 = str1.replaceAll(".","").replaceAll(",","").replaceAll(" ","").trim().toLowerCase();
//   const temp2 = str2.replaceAll(".","").replaceAll(",","").replaceAll(" ","").trim().toLowerCase();
//   if(temp1.length != temp2.length) {
//     return false;
//   }
//   const val1 = temp1.split("").sort().join("");
//   const val2 = temp2.split("").sort().join("");
//   if(val1 == val2) {
//     return true;
//   }
//   return false;
// }

function isAnagram(str1, str2) {
  // Remove spaces, convert to lowercase, and sort the characters
  const formatString = (string) => string.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  return formatString(str1) == formatString(str2);
}

module.exports = isAnagram;