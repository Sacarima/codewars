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


 /**
  * CREATE A PHONENUMBER
  * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

  * 
  */


// SOLUTION 1


function createPhoneNumber(numbers){
  return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];

}


// SOLUTION 2

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

console.log()


/* MULTIPLICATION

  Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

// SOLUTION 1

const multiplicationTable = size =>
  Array.from(
    {length: size}, (_,i) => Array.from(
    {length: size}, (_,j) => (i + 1) * (j + 1)
  )
    
  )


// SOLUTION 2

multiplicationTable = function(size) {
  let result = [];

  for (let i = 0; i < size; i++) {
    result[i] = [];
    for(let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}


// SOLUTION 3

const res = [];
for (let i = 1; i <= n; i++) {
  const row = [];
  for (let j = 1; j <= n; j++){
    row.push(i * j);
  res.push(row);
}
return res;
}


/* MULTIPLE OF 5 AND 3
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/


// SOLUTION 1

function solution(number){
  let sumOfThreeAndFive = 0;
  for(let i = 0; i < number; i++) {
    if(i % 5 === 0 || i % 3 === 0) {
      sumOfThreeAndFive += i
    }
  }
  return sumOfThreeAndFive
}


// SOLUTION 2

function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

/* //  DATA REVERSE

  A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/


// SOLUTION 

const dataReverseB = data =>
   new Array(data.length/8)
  .fill('')
.map((_,i) => data
     .slice(i*8, (i + 1)* 8))
     .reverse()
     .flat()


// solution 2

const dataReverseA = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

/*
  ARRAY.DIFF

  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

//SOLUTION 1


function arrayDiff(a, b) {
  let result = [];
   for(const n of a ) {
       if(!b.includes(n)) {
           result.push(n)
       }
   }
   return result;
 }


 // SOLUTION 2


 function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}


// SOLUTION 3

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}


// SOLUTION 4


function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}


/*
  TAKE A 10 MINUTE WALK
  You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes
   too early to an appointment, so you decided to take the opportunity to go for a short walk. 
   The city provides its citizens with a Walk Generating App on their phones -- 
   everytime you press the button it sends you an array of one-letter strings representing directions 
   to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) 
   and you know it takes you one minute to traverse one city block, so create a function that will 
   return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
   and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters 
('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/


// SOLUTION 1

const isValidWalk = walk => {
  let result = walk.reduce((a, b) => {
    return { ...a, [b] : a[b] ? a[b] += 1 : a[b] = 1}
  }, {})

return walk.length === 10 ? (result.n === result.s && result.w === result. e) : false
}


// Solution 

function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}


/*
  You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the 
  integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of 
the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left 
side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/


// SOLUTION 1


function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i + 1).reduce((a, b) => (a + b), 0)
    let right = arr.slice(i).reduce((a, b) => ( a + b), 0)
    if ( left === right ) {
      return i
    }
  }
  return -1
}


//  SOLUTION 2

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// SOLUTION 3

findEvenIndex=(a,b=a=>a.reduce((a,b)=>a+b,0))=>a.findIndex((_,i)=>b(a.slice(0,i))==b(a.slice(i+1)))
