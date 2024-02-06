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
var romanToInt = function(s) {
    const symbolValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    const firstSymbol = s[0];
    const value = symbolValue[firstSymbol];

    // If the first symbol is "I", subtract its value from the remaining string
    if (firstSymbol === "I") {
        return parseInt(s.substring(1)) - value;
    }

    // For now, just return the original string
    return s;
};

console.log(romanToInt("II"))