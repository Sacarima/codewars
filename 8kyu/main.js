/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
    return array.map(changed=> -changed)
}

console.log(array([-1,-2,-3,-4,-5]))

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

function grow(x) {
    return x.reduce((a, b)=> (a * b))
    // this is a different solution to this problem
    /*let num = 1;
    for(let i = 0; i < x.length; i++) {
        num *= x[i]
    }
    return num;*/
}

console.log(grow([1, 2, 3, 4] ))

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


*/

function findAverage(array) {
    const sum = array.reduce((a, b)=> (a + b), 0)
    const avg = (sum / array.length) || 0;
    return avg;
  }
  
  console.log(findAverage([1, 2, 3, 4, 5, 6, 8, 9, 12]))

  /*
  Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
ARRAYSSTRINGSFUNDAMENTALS
  */

function stringToArray(string) {
    const separa = string.split( ' ' );
    return separa;
}

console.log(stringToArray("I love arrays they are my favorite"));
////////////////////////stopppppped hereeeeeeee
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/
//solution 1
function solution(str){
    return str.split('').reverse().join('')
  }

// solution 2
  
  const solution = s => [...s].reverse().join('')
 
  // solution 3
  function solution(s){
    let o = '';
    for (let i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }

  /*
      We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

  */

// splution 1

function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

// solution 2

function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

//solution 3

function numberToString(num) {
  return ''+num;
}

//solution 4

const numberToString = num => `${num}`;

/**
    Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */


//solution 1

function repeatStr (n, s) {
  return s.repeat(n)
}

//solution 2

function repeatStr (n, s) {
  let str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
  }

  /*
      Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

  */

// solution 1

function noSpace(x){
  return x.replace(/ /g, '')
}

// write a function that Converts a string to number 

// solution 1 

function toNumber (str) {
  return Number(str);
  return null;
} 


//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

//solution 1

function removeChar(str){
  
  return str.slice(1, -1)

};

//solution 2

function removeChar(str){
  return str.substring(1, str.length-1);
 };
 


/*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

//solution 1

function feast(beast, dish) {
  //your function here
   return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1] ? true : false
  }
  
  //solution 2
  
  function feast(beast, dish) {
    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
  }
  
  // solution 3
  
  function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
  }
  
  /*
	If you can't sleep, just count sheep!!
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/ 

//solution 1

var countSheep = function (num){
  //your code here
  let result = '';
  for(let i = 1; i <= num; i++) {
    result += i.toString() + ' sheep...'
  }
  return result
}

//solution 2

const countSheep = function(num) {
    return [...Array(num).keys()].reduce((res, i) => res + (i + 1) + ' sheep...', '');
  }

  /*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

*/

//Solution 1

String.prototype.isUpperCase = function() {
  // your code here
   return this.toString() === this.toUpperCase()
}

//solution 2

String.prototype.isUpperCase = function() {
  return this.toUpperCase() == this;
}
/*
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


*/

//solution 1

function abbrevName(name){
  return name.match(/\b([A-Z])/g).join('.')
}

/*
Fake Binary
  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

//solution 1

function fakeBin(x){
  let sum = "";
  for(let i = 0; i < x.length; i++) {
    if(x[i] < 5) {
      sum += 0;
    }else {
      sum += 1;
    }
  }
  return sum
}


//solution 2

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//solution 3

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
/////////////////HEEEEEEEERRRRRRRRRRREEEEEEEEEEEE
/*
  COUNT BY X 
  Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

//solution 1

function countBy(x, n) {
  let z = [];
  for(let i = 1; i <= n; i++) {
    z.push( i * x)
  }
  return z;
}

//solution 2

// Get the mean of an array

/*
    It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.


*/

// solution 1

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = marks.reduce((a, b) => (a + b), 0)
  const avg = Math.floor((sum / marks.length) || 0)
  return Math.round(avg)
}

//solution 2 

function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

/**
    Count the Monkeys!

    You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
 */

 //solution 1

 function monkeyCount(n) {
  // your code here
    let sum = [];
    for(let i = 1; i < n + 1; i++) {
      sum.push(i)
    }
    return sum;
    
  }

  //solution 2

  function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
  }
/*
    Grasshopper - Summation
    Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/  

// Solution 1


var summation = function (num) {
  // Code here
  let sum = 0;
  for(let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}


// solution 2 

const summation = n => n * (n + 1) / 2;

/**
    Find Multiples of a Number
    In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
  
 */

// solution 1 

function findMultiples(integer, limit) {
  //your code here
  let multiples = [];
  for(let i = integer; i <= limit; i = i + integer) {
    multiples.push(i);
  }
  return multiples;
}

/*

Find the first non-consecutive number
  Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
*/

// solution 1

function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length - 1; i++){
      const el = arr[i];
      const next = arr[i + 1];
      if(next - el !== 1){
         return next;
      };
   };
   return null;
}

// solution 2

function firstNonConsecutive (arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);

  return (Number.isInteger(result)) ? result : null;
}

/*
  Removing Elements
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

//solution 1

function removeEveryOther(arr){
  let result = [];
  for( let i = 0; i < arr.length; i+=2 ) {
    result.push(arr[i])
  }
  return result;
}

//solution 2

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

/*

N-th Power
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.


*/

// solution 1

function index(array, n){
  if (array[n] == undefined) { 
    return -1;
  }  else {
    return Math.pow(array.find((number) => number == array[n]), n);
  }
}

// solution 2

function index(array, n){
  return array[n] ** n || -1;
}

/*
  Sort and Star

  You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// Solution 1

function twoSort(s) {
  let sorting = s.sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
  return sorting[0].split('').join('***')
}

// solution 2

twoSort = s => s.sort()[0].split('').join('***')

// solution with explanation 

function twoSort(s) {
  const sorting = s.sort(); // the default sort function works
  return sorting[0] // take first element
    .split("") // split string into chars
    .join("***"); // join chars with ***
}

/*
  Remove First and Last Character Part Two

  You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/


// solution 1

function array(string) {
  return string.split(',').slice(1, -1).join(' ') || null
}

// solution 2
const array = (arr) => {
  arr = arr.split(',')
  arr.pop()
  arr.shift()
  return arr.join(' ') === '' ? null : arr.join(' ')
}

/*
  Find numbers which are divisible by given number

  Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

// solution 1

function divisibleBy(numbers, divisor) {
  // create variable for results
  const result = [];

  // loop over numbers
  for (const n of numbers) {
    // check if current number is divisible by divisor
    if (n % divisor === 0) {
      // if yes, save it into results variable
      result.push(n);
    }
  }

  // return results
  return result;
}

//solution 2

function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}

// solution 3

const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));


/*******************************5 */

/*
    ARE YOU PLAYING BANJO

    Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// Solution 1

function areYouPlayingBanjo(name) {
  const strings = name[0].toLowerCase() === 'r' ? " plays banjo" : " does not play banjo"
  return name + strings
}


// Solution 2

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

// Solution 3


function areYouPlayingBanjo(name) {
 
  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

// Solution 4

function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

// Solution 5

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}


/*
  Remove Exclamation Marks

  Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


*/

// Solution 1

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

// solution 2 

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// Solution 3

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}


// Solution 4


function removeExclamationMarks(s) {
  const arr =s.split("");
  arr = arr.filter(function(e){
        return e !== "!";
    })
    return arr.join("");
}


// Solution 5

const removeExclamationMarks = (s) => {
  return s.split('').filter((letter) => letter !== '!').join('')
}

/**
 * 
        All star Code challenge#18
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1

 */

// Solution 1

// All star Code challenge#18
function strCount(str, letter){  
  let result = 0
  for (let i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      result++
    }
  }
  return result
}


// Solution 2 

function strCount(str, letter){  
  return str.split(letter).length-1
}

// Solution 3


function strCount(str, letter){  
  return str.split('').filter(c => c == letter).length;
}


// Solution 4

function strCount(str, letter) {  
  return str.length - str.replace(new RegExp(letter, "gi"), '').length;
}

// Solution 5

function strCount(str, letter){  
  return (str.match(new RegExp(letter, 'g')) || []).length;
}

// Solution 6

function strCount(str, letter) { 
  let count = 0;
  
  [...str].forEach(char => char == letter ? count++ : count);
  
  return count;
}

// Solution 7 

const strCount = function f( str , letter ){  
  const result= new RegExp( letter , "g" ); 
  return str.length - str.replace( result , "" ).length  ;
}

/*
    Grasshopper - Personalized Message

    Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

// Solution 1

let greet = (name, onwer) => {
  if(name === onwer) {
    return 'Hello boss'
  }else {
    return 'Hello guest'
  }
}


// Solution 2

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 	'Hello guest';
}

//solution 3

function greet (name, owner) {
  return `Hello ${name==owner?'boss':'guest'}`
}

/*
  Double Char

    Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/

// Solution 1


function doubleChar(str) {
  return str.split('').map( num => num + num).join('')
}


function doubleChar(str) {
	let word = '';
  for (let i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};


// solution 3

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}


// solution 4


function doubleChar(str) {
  return str.split("").map(function (c) {
    return c + c;
  }).join("");
}


// solution 5 

function doubleChar(str) {
  return [...str].map(v=>v+v).join('');
}

/*

  Correct the mistakes of the character recognition software
  Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/


// Solution 1

function correct(string){
  return string.replace(/5/g, 'S').replace(/1/g, 'I').replace(/0/g, 'O')
 }

 // solution 2

 const corrections = {
	'5': 'S',
	'0': 'O',
  '1': 'I',
};

const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);

// Solution 3

function correct(s){
	s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '5') s[i] = 'S';
    else if (s[i] === '0') s[i] = 'O';
    else if (s[i] === '1') s[i] = 'I';
    }
  return s.join('');
}


// Solution 4 


function correct(string) {
	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
}



/*
  Vawel replacement
    Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/




// Solution 1 

function shortcut (string) {
  return string.replace(/[aeiou]/gi, '')
}


// Solution 2


function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}


// solutioon 3 


function shortcut (string) {
  return string
    .split('')
    .filter(str => !'aeiou'.includes(str))
    .join('')
}


// Solution 4 


function shortcut(string){
  let vowels = "aeiou";
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (!(vowels.indexOf(string[i]) > -1)) {
      output += string[i];
    }
  }
  return output;
}

// Solution 5

function shortcut(string){
let vowels = 'aeiou';

let result = [];

  for( let i = 0; i < string.length; i++){
  if(!vowels.includes(string[i])){
    result.push(string[i]);
  }
}
  return result.join('');
};

/*
Do i get bonus

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).


*/


// Solution 1


let bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1 )}`


// Solution 2

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}


// Solution 3

function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10).toString();
  }
  return "£" + salary.toString();
}


/*
  SHORT AND LONG

  Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/


// SOLUTION 1


function solution (a, b) {
  if(a.length < b.length) return a + b + a;
    return b + a + b;
}


/*

  COPITALIZATION AND MUTABILITY

  Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


*/


// Solution 1 

function capitalizeWord(word) {
  let sum = word[0].toUpperCase() + word.slice(1);
   return sum;
 }



 // Solution 2



 const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());




 
 // solution 3


 function capitalizeWord(word) {
  let str = word[0].toUpperCase();
  for (let i = 1; i<word.length; i++) {
  str += word[i];
  }
  return str;
}


// ADD LENGTH

// SOLUTION 1

function addLength(str) {
  return str.split(' ').map((here) => `${here} ${here.length}`)
}


// SOLUTION 2 
function addLength(str) {
  let split = str.split(" ");
  let result = [];
   
  for (i = 0; i < split.length; ++i) {
    result.push(split[i] + " " + split[i].length);
  } 
  return result;  
}

// Remove duplicates from list

/*
  Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/


// SOLUTION 1

function distinct(a) {
  return [... new Set(a)];
}

// Solution 2 

function distinct(a) {
  return Array.from(new Set(a));
}

// solution 3

function distinct(arr) {
  let res = []; 
  
  for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i]);
    }
}
return res;
}

// solution 4

const distinct = a => a.filter((item, index) => a.indexOf(item) === index);


/*

Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// SOLUTION 1

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

/*
    REVERSING WORDS IN A STRING
    You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

// SOLUTION 1

function reverse(string){
  return string.split(' ').reverse().join(' ');
}

/*
  Merge two sorted arrays into one
  You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/

// SOLUTION 1

function mergeArrays(arr1, arr2) {
  let mergedArrays = arr1.concat(arr2)
  mergedArrays = new Set(mergedArrays)
  mergedArrays = Array.from(mergedArrays)
  return mergedArrays.sort((a, b) => a - b)
}

// SOLUTION 2 

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}


// SOLUTION 3

function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}

/**
  STRINGY STRINGS

    write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
 */

// SOLUTION 1


function stringy(size) {
  let res = ''
  for(let i = 0; i < size; i++) {
    if(i % 2 === 0) {
      res += 1
    }else {
      res += 0
    }
  }
  return res
}

// SOLUTION 2 

const stringy = size => "10".repeat(size).slice(0,size);


//  SOLUTION 3

const stringy = size =>
  ``.padStart(size, `10`);

  // SOLUTION 4

  function stringy(size) {
    return new Array(size).join('10').substr(0,size)   
  }

  /*
    String Templates - Bug Fixing #5
    Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
  */

    // SOLUTION 1 

    function buildString(...template){
      return `I like ${template.join(', ')}!`;
    }

    /*
          Multiplication table for number
    */

  // SOLUTION 1

  function multiTable(number) {
    let arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
    return arrayNumbers.map(item => `${item} * ${number} = ${item*number}`).join('\n');
  }

  // SOLUTION 2

  const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }

  /**
   * 
   *  Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).


   */


// Solution 

function logicalCalc(array, op){
  //your code here
  // function with two argument, an array of boolean values and an operator
  // Boolean value, true or false
  // create a variable result, its initialized to the first element
  // in the boolean array.
  // Loop throught the array, the for loop iteerates from the second
  // element, index 1
  // appy the specified logic oprration then return result
  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    if (op === 'AND') {
      result = result && array[i]
    }else if(op === 'OR') { 
      result = result || array[i]
    }else if (op === 'XOR') {
      result = result !== array[i]
    }
  }
  return result
}



/**
 * 
 * Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


 */


// Solution 1

function sumOfDifferences(arr) {
  // create a function with an array as an argument
  // sortout the array in descending order, from highest to lowest
  // create a variable call it sum store the comulative values
  // loop through the array, iterate over the array from the first element ( i = 0)
  // to the second to the last the element ( i = length of arr - 2)
  // this is because the last element does not have subsequesnt element to form pair for 
  // comparision
  //calculate and the differences. in each iteration of the loop, the difference 
  // between the current arr[i] and the next element arr[i + 1] is calculated
    arr.sort((a, b) => b - a) // sort going up
    let sum = 0;
    for(let i = 0; i < arr.length - 1; i++ ) {
      sum += arr[i] - arr[i + 1] // adding the differences between consecutive pairs
    }
    return sum
  }


  // Solution 2
  function sumOfDifferences(arr) {
    arr.sort(( a, b ) => b - a)
    let sum = 0
    for ( let i = 0; i < arr.length -1; i++ ) {
      sum += arr[i] - arr[ i + 1]
    }
    return sum
  }

  /**
   * 
    Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


   */


// Solution 1

function sumOfDifferences(arr) {
  arr.sort(( a, b ) => b - a)
  let sum = 0
  for ( let i = 0; i < arr.length -1; i++ ) {
    sum += arr[i] - arr[ i + 1]
  }
  return sum
}

/**
 * 
 *HELP! Jason can't find his textbook! It is two days before the test date, 
 and Jason's textbooks are all out of order! Help him sort a list
  (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
 */

// Solution 1

function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}


//  convert to stringg                                                                                                        convert to string
//solutio 1 
function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

// remove the ffiirst and last character of a string

// solution 1

function removeChar(n, s){
  let stringCol = ''
  for(let i = 0; i < n; i++) {
    stringCol += s
  }
  return stringCol
}


/**
  Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */

// Solution 1

function abbrevName(name){
  return name.match(/\b(\w)/g).join('.').toUpperCase()
}


// Solution 2

function abbrevName(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

/**
 * 
 *  const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    Get the array of all inventors' first and last names

 */

    // Solution 1

    const abreviateName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

    /**
     * 
     *Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
     */

    // Solution 1

    function htmlspecialchars(formData) {
      return formData.replace(/&/g, "&amp;")
                     .replace(/"/g, "&quot;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;");
    }
    

    /*
        You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
    */

    // Solution 1

    function check(a,x){
      return a.includes(x);
    }

    /**
     For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
 If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
 If there are no good ideas, as is often the case, return 'Fail!'.
     */

    // Solution 1

    function well(x){
      let countStrings = x.filter(item => item === 'good').length
      
      if( countStrings === 0 ) {
        return 'Fail!'
      }else if( countStrings  <= 2 ) {
        return 'Publish!'
      }else {
        return 'I smell a series!'
      }
    }