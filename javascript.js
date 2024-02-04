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