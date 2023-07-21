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
Calculate the sum of the numbers in the nth row of this triangle
 (starting at index 1) e.g.: (Input --> Output)

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

  /*
    Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.
  */


// solution 1

function sumOfMinimums(arr) {
  const sum = arr.map(x=> Math.min(...x)).reduce((a, b) => (a + b), 0)
   
   return sum;
}

// solution 2

function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

//solution 3

function sumOfMinimums(arr) {
  let total = 0;
  
  for (let i = 0; i < arr.length; i++){
   total += Math.min(...arr[i])
  }
  
  return total;
}

/*
  JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

// solution 1

function getEvenNumbers(numbersArray){
  return numbersArray.filter(x=> {
    return x % 2 == 0;
  })
}

// solution 2

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

/*
  The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

//solution 1

function removeSmallest(numbers) {
  const arr = numbers.slice(0)
   let smallNumInTheArray = numbers.indexOf(Math.min(...numbers));
   arr.splice(smallNumInTheArray, 1)
   return arr;
 }

 //solution 2

 function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

/*
  You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/

//solution 1

function myLanguages(results) {
  let totalResult = [];
  for(let i in results) {
    if(results[i] >= 60) {
      totalResult.push(i)
    }
  }
  return totalResult.sort((a, b) => results[b] - results[a])
}

// solution 2 

function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

// solution 3

const myLanguages = results => 
  Object.entries(results)
        .sort((a,b)=> b[1] - a[1])
        .filter(i=> i[1] >= 60)
        .map(i => i[0])

/*
  Task
You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`
Good luck and try to be as creative as possible!


*/

//solution  1

const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);

//solution 2

const helloWorldH = () => /Hello, World!/.source

/*
  Testing 1-2-3

  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3
*/

// solution 1

var number=function(array){
  //your awesome code here
  return array.map((element, index) => `${index + 1}: ${element}`)
}

// solution 2

var number = function(arr) {
  var newArr = [];
    if (arr.length === 0) {
      return [];
    } else {
      for (var i = 0, len = arr.length; i < len; i += 1) {
        newArr.push((i + 1) + ': ' + arr[i]);
      }
    }
    return newArr;
  }

  /************** */

  /**
      Two oldest ages
      The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
   */

  // solution 1

function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2)
}

// solution 2

function twoOldestAges(ages){
  let oldest = -Infinity;
  let second = -Infinity;
  
  for (let i = 0; i < ages.length; ++i)
  {
    if (ages[i] > oldest)
    {
      second = oldest;
      oldest = ages[i];
    }
    else if (ages[i] > second)
    {
      second = ages[i];
    }
  }
  
  return [second, oldest];
}

/*
VOWEL COUNT

    Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// SOLUTION 1

function getCount(str) {
  let vowelC = 0;
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for(let char of str) {
    if(vowel.includes(char)) {
      vowelC++;
    }
  }
  return vowelC;
}

// solution 2

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// solution 3

function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

 // solution 4

 function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// solution 5

function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}

// solution 6

function getCount(str) {
  var vowelsCount = 0;
  for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
  }
  return vowelsCount;
}


/*

  Don't Give Me 5!
    In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

//Solution 1

function dontGiveMeFive(start, end)
{
  let count = 0;
  for(let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;;
}

//solution 2

function dontGiveMeFive(start, end){
  let res = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) res.push(i);
  }
  return res.length;
}

//solution 3

function dontGiveMeFive(start, end)
{
  return Array.from(Array(end-start+1),(e,i)=>i+start)
          .filter((e)=>(''+e).indexOf('5')===-1)
          .length;
}

/**
    Maximum Product

    Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
 */

/// Solution 1 

function adjacentElementsProduct(array) {
  let maximumProduct = array[0] * array[1]
  for (let i = 0; i < array.length; i++) {
    let product = array[i] * array[i + 1]
    if (product > maximumProduct) {
      maximumProduct = product
    }
  }
  return maximumProduct
}

// Solution 2

function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}

// solution 3

function adjacentElementsProduct(a) {
  return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
}

// Solution 4

const adjacentElementsProduct = (array) => array.slice(1).reduce(
  (max, cur, i) => Math.max(array[i] * cur, max), -Infinity
);

/**
 * 
 Sort Array By String Length

 Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


 */

// solution 1 

function array(string) {
  return string.sort((a, b) =>   a.length - b.length)
}

// solution 2

function compareNumeric(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
}

function sortByLength (array) {
	let arrayL = array.map((value) => {
		return value.length;
	})
	arrayL = arrayL.sort(compareNumeric);
	let resArr = arrayL.map((value) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i].length === value) {
				return array[i];
			}
		}
	})
	return resArr;
};

/**
 * 
   Flatten and sort an array

   Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:


 */

// Solution 1

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

// solution 2 

const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);

//solution 3

function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[])
    .sort((a, b) => a - b)
    ;
}

// solution 4

function flattenAndSort(array) {
  var newArray = [];
  for(var i =0;i<array.length;i++)
  {
    for(var j=0;j<array[i].length;j++)
    {
      newArray.push(array[i][j]);
    }
  }
    
  return newArray.sort((a,b) =>  a-b);
}

//solution 5


const flattenAndSort = $ => $.toString().split(',').filter(e => e).map(Number).sort((a,b)=>a-b)

/*
    FIND THE CAPITALS

    Write a function that takes a single string (word) as argument. 
    The function must return an ordered list containing the indexes of all capital letters in the string.
*/

// pseudo
// split word into array of chars
// map through array, if char is uppercase, return index, if not, return null
// filter through newArr, skipping null values


// Solution 1

var capitals = function (word) {
  return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};

//solution 2

var capitals2 = function (word) {
  return word.split('').reduce(function(result, c, i) {
    if (c.toUpperCase() === c) result.push(i);
    return result;
  }, []);
};

//solution 3

const capitals3 = word => { 
  const capsArr = word.match(/[A-Z]/g)
  return capsArr.map( x => { 
    return word.indexOf(x) }) }

// solution 4

 const capitals4 = function (word) {
  var caps = [];
  for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

/*
  Find The middle element

  As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/


// solution 1

function gimme (triplet) {
  if (triplet[0] > triplet[1] && triplet[0] < triplet[2] ||
     triplet[0] > triplet[2] && triplet[0] < triplet[1]) {
    return 0;
  }
  if(triplet[1] > triplet[0] && triplet[1] < triplet[2] ||
     triplet[1] > triplet[2] && triplet[1] < triplet[0]) {
    return 1
  }
  return 2
}

// solution 2

function gimme(triplet) {
  return triplet.indexOf(triplet.concat().sort(function(a, b) { return a - b })[1])
}

//solution 3

const gimme = function (triplet) {
  return triplet.indexOf([...triplet].sort((x, y) => x > y)[1]);
};

// solution 4

var gimme = function (triplet) {
  let index = 0;
  let max = Math.max(...triplet);
  let min = Math.min(...triplet);
  for(let i = 0; i < triplet.length; i++){
    if(triplet[i] !== max && triplet[i] !== min){        
      index = i;
    }
  }
  return index;
};


/**
    no oddities here
    Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.


 */

// Solution 1


function noOdds( values ){
  return values.filter((a) => a % 2 === 0 )
}


// Solution 2 

function noOdds( values ){
  function isEven(number){
	return number%2 == 0;
  }
  
  return values.filter(isEven);
}


// Solution 3

var noOdds = values => values.filter(x => !(x % 2));



/*
   Descending order

   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// Solution 1

function descendingOrder(n){
  return Number([...String(n)].sort(( a, b ) => b - a ).join(''))
}


// Solution 2 

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}


// Solution 3

function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}


/**
 * 
 * Even numbers in array
 * Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
 */



// Solution1


function evenNumbers(array, number) {
  let resultOfevens = [];
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] % 2 === 0 ) {
      resultOfevens.push(array[i]);
    }
  }
  return resultOfevens.slice(-number);
}



// Solution 2


const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);



/* SMALL ENOUGH

    You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.


*/

// SOLUTION 1

function smallEnough(a, limit){
  for(let i = 0; i < a.length; i++) {
   if  (a[i] > limit) {
     return false;
   }
  }
  return true
}


// SOLUTION 2


function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

// SOLUTION 3

const smallEnough = (a, l) => a.every(e => e <= l)


// SOLUTION 4

function smallEnough(a, limit){
  return a.every(x => x <= limit);
}


/* MINIMIZE SUM OF ARRAY (ARRAY SERIES#1)

  Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

*/

// SOLUTION 1

function minSum(arr) {
  arr.sort((a, b) => a - b);
  let minSum = 0;
  const n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    minSum += arr[i] * arr[n - 1 - i];
  }

  return minSum;
}

// SOLUTION 2

function minSum(arr) {
  return arr.sort((a, b) => a - b).reduce((a, b) => (a + b * arr.pop()), 0)
}

// SOLUTION 3

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);



  /*
    REVERSE WORDS

    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
  */


function reverseWords(string) {
  const words = string.split( ' ' );
  const reverseWord = words.map(word => word.split('').reverse('').join(''));
  const stringJoin = reverseWord.join( ' ' );
  return stringJoin;
    
  }


  // SOLUTION 2



  function reverseWords(str) {

    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }


  // SOLUTION 3

  function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        reversedWord = str[i] + reversedWord;
      } else {
        reversedStr += reversedWord + ' ';
        reversedWord = '';
      }
    }
    return reversedStr + reversedWord;
  }

  /**
   * 
   *  ARE THEY THE SAME
   * 
   * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
   */



// SOLUTION 1


function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}


/* FIZZBUZZ
    Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/


// Solution 1 

// Return an array
function fizzbuzz(n)
{
  const result = []
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0 ) {
        result.push("FizzBuzz");
    }else if(i % 3 === 0) {
        result.push("Fizz");
    }else if(i % 5 === 0) {
        result.push("Buzz");
    }else {
      result.push(i);
    }
  }
  return result;
}


/*
  CONVERNT AN ARRAY OF STRING TO ARRAY OF NUMBERS
  Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/


// SOLUTION 1

function toNumberArray(stringarray){
  let result = [];
  for(let i = 0; i < stringarray.length; i++) {
    result.push(Number(stringarray[i]));
  }
  return result;
}


//  SOLUTION 2

function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}

