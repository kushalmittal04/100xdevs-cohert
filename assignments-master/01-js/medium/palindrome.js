/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   // Using a regular expression
//   // const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   let str6 = str.replaceAll(".","");
//   let str5 = str6.replaceAll("?","");
//   let str4 = str5.replaceAll(" ","");
//   let str3 = str4.replaceAll("!","");
//   let str2 = str3.replaceAll(",","");
//   let str1 = str2.toLowerCase();
//   const n = str1.length;
//   for(let i=0 ; i<n/2 ; i++) {
//     if (str1[i] != str1[n-i-1]) {
//       return false;
//     }
//   }
//   return true;
// }

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  return cleanedStr == cleanedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
