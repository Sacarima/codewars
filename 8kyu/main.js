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
