//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9. Palindrome 

// Given an integer x, return true if x is a palindrome, and false otherwise.
// var isPalindrome = function(x) {
//   if(x.toString() == x.toString().split('').reverse().join(''))  {
//     return true
//   }
//   else{
//     return false
//   }
// };

// console.log( isPalindrome(233))

//This provides a much better runtime but memory is not great 
// var isPalindrome = function(x) {
//     const str = x.toString();
//     let left = 0;
//     let right = str.length - 1;
    
//     while (left < right) {
//       if (str[left] !== str[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
    
//     return true;
//   };
  

// console.log(isPalindrome(10));

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 387. First Unique Character in a String 

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// function firstUniqChar(s) {
    // Step 1: Initialize a dictionary/object to store character frequencies
//     const charFrequency = {};

    // Step 2: Count character frequencies
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         charFrequency[char] = (charFrequency[char] || 0) + 1;
//     }

    // Step 3: Find the first non-repeating character
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (charFrequency[char] === 1) {
//             return i; // Return the index of the first non-repeating character
//         }
//     }

    // Step 4: Handle cases where no non-repeating character exists
//     return -1;
// }
// firstUniqChar("aabba")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 13. Roman to Integer
// Given a roman numeral, convert it to an integer.
// var romanToInt = function(s) {
//     const symbolValue = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000
//     };

//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//         const currentSymbolValue = symbolValue[s[i]];
//         const nextSymbolValue = symbolValue[s[i + 1]];
        
//         if (nextSymbolValue > currentSymbolValue) {
//             result += nextSymbolValue - currentSymbolValue;
//             i++; // Skip the next symbol as it's already handled
//         } else {
//             result += currentSymbolValue;
//         }
//     }
    
//     return result;
// };
// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return "";

//     let prefix = "";

//     for (let i = 0; i < strs[0].length; i++) {
//         let char = strs[0][i];
        
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[j][i] !== char || i === strs[j].length) {
//                 return prefix;
//             }
//         }
//         prefix += char;
//     }
//     return prefix;
// };
