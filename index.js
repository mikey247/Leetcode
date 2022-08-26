console.log("LEETCODE SHEET");

// 383. RANSOM NOTE

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// var canConstruct = function (ransomNote, magazine) {
//   //   console.log(ransomNote[0]);

//   const arr = magazine.split("");
//   for (let i = 0; i < ransomNote.length; i++) {
//     // console.log(arr.indexOf(ransomNote[i]));
//     if (arr.indexOf(ransomNote[i]) === -1) {
//       //   console.log(false);
//       return false;
//     } else {
//       //   console.log(true, i);
//       arr.splice(arr.indexOf(ransomNote[i]), 1);
//     //   console.log(arr, "...array");
//     }
//   }
//   return true;
// };

// canConstruct("a", "b");
// console.log(canConstruct("aa", "ab"));
// canConstruct("aa", "aab");
