/*
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

// first solution

function highAndLow(numbers) {
    numbers = numbers.split( " " );
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
    
}

// second solution 

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

  /*
  Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
  */

function rowSumOddNumbers(n) {
    return n * n * n
  }

// 2 solution

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }

/*
    Create a function that returns the sum of the two lowest positive numbers given an 
    array of minimum 4 positive integers. No floats or non-positive integers will be 
    passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// Solution 1

 function sumTwoSmallestNumbers(numbers) {  
  const sortTheNumbers = numbers.sort((a, b) =>  a - b);
  return sortTheNumbers[0] + sortTheNumbers[1];
}

// solution 2

function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a>b).slice(0,2).reduce((acc,curr)=>acc+curr);
};

/*
  Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


*/

// solution 1

function minMax(number){
  return [Math.min(...number), Math.max(...number)]
}

// solution 2

function minMax(number) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

/*
  Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

*/

// 1th solution

function squareDigits(num){
  return Number(num.toString().split('').map(number => number ** 2).join(''));
}

// 2nd solution

function squareDigits(num){
  const array = num.toString().split('').map( function(int) {
    const i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}

// 3rd solution

function squareDigits(num){
  const string = num.toString();
  const results = [];
  for (let i = 0; i < string.length; i++){
      results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
};

/*
  Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//solution 1

function addBinary(a,b) {
  return (a + b).toString(2)
}

// solution 2

const addBinary = (a, b) => Math.trunc(a + b).toString(2)

/*
   rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

// solution 1

const isSquare = function(n){
  let numchk;
  for(let i = 0; i < n+1; i++){
  numchk = n/i;
  if(i === numchk){
  return true;
  }
  }
  if(n<0){
  return false
  } else if(numchk==1) {
  return false
  } else {
  return true
  }
  }
  
  // solution 2 
  
  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }
  
  // solution 3 
  
  var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }
  
  // solution 4
  
  var isSquare = function(n){
  
    if((Math.sqrt(n) % 1) == 0)
      return true;
    else
      return false;
  }

/*
    Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

//solution 1

function oodOrEven(array) {
  const checkStatus = array.reduce((a, b) => (a+b), 0)
  if(checkStatus % 2 === 0) {
      return "even"
  }else {
      return "odd"
  }
}


  //solution 2

  function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

  


