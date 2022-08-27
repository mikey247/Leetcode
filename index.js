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

// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// var twoSum = function (nums, target) {
//   let vals = {};

//   for (let i = 0; i < nums.length; i++) {
//     const currentNumber = nums[i];
//     const expectedNumber = target - currentNumber;

//     if (expectedNumber in vals) {
//       return [vals[expectedNumber], i];
//     } else {
//       vals[currentNumber] = i;
//     }
//   }

//   return [];
// };

// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// var runningSum = function(nums) {

//     let results = []
//     results.push(nums[0])

//     for(let i =1 ; i<nums.length; i++){
//         // results[i] = nums[i] + results[i-1]
//         nums[i] = nums[i] + nums[i-1]
//     }

//     // return results;
//     return nums;
// };

// 412. Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// var fizzBuzz = function(n) {
//     let answer = []

//     for(i=1; i<=n ; i++){
//         if(i % 3 === 0 && i % 5 === 0 ){
//         answer.push("FizzBuzz")
//     }
//         else if(i % 3 === 0){
//             answer.push("Fizz")
// }
//         else if(i % 5 === 0){
//             answer.push("Buzz")
// }
//     else{
//            answer.push(`${i}`)
//         }
// }

//     return answer

// };

// 1672. Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Example 2:
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// Example 3:
// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

// var maximumWealth = function(accounts) {

//     maxWealth = 0

//     //looping through all customers array
//     for(let i = 0 ; i<accounts.length; i++){
//             let customerSumWealth = 0
//             //looping through one customer array
//         for(let j = 0; j<accounts[i].length; j++ ){
//             customerSumWealth+=accounts[i][j]
//         }

//         maxWealth = Math.max(maxWealth,customerSumWealth)
//     }

//     return maxWealth

// };

// 1342. Number of Steps to Reduce a Number to Zero
// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

// var numberOfSteps = function(num) {
//     let steps = 0

//     for(let i=num; i>0 ; ){
//             steps++
//         if(i % 2 === 0){
//             i= i/2
//         }else{
//             i--
//         }
//             }

//         return steps

// };

// 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// var canConstruct = function(ransomNote, magazine) {
//     const arr = magazine.split("");

//   for (let i = 0; i < ransomNote.length; i++) {
//     console.log(arr.indexOf(ransomNote[i]));
//     if (arr.indexOf(ransomNote[i]) === -1) {
//       return false;
//     } else {
//       arr.splice(arr.indexOf(ransomNote[i]), 1);
//     }
//   }

//   return true;
// };

// 876. Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// var middleNode = function(head) {
//     let copy = head, count = 1  //Making a copy of the head and starting the count

//     while(copy.next){  //determining the size of the list by looping through and checking if each node has a next property containing address of the next node in the linked list
//         copy = copy.next
//         count++
//     }

//       count = Math.floor(count/2) //determining the middle of the list by dividing list by 2 and rounding down

//       while(count){ //looping through the list whilst decreasing the count
//           head = head.next;
//           count--;
//         }

//          console.log(head)
//          return head;

//   };
