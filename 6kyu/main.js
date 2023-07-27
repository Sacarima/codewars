/*
    Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

// solution 1


function twoSum(numbers, target) {
    // ...
    let indexOfarray = []
    for(let i = 0; i < numbers.length; i++) {
      for(let j = i + 1; j < numbers.length; j++) {
        if(numbers[i] + numbers[j] === target) {
          indexOfarray.push(i)
          indexOfarray.push(j)
        }
      }
    }
    return indexOfarray;
  }

  // Best solution (optim)

  

//   You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// Solution 


function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
   return array.map((x) => x % 2 ? odd.shift() : x);
 }