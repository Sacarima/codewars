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

// Convert string to number 

// solution 1 

function toNumber (str) {
  return Number(str);
  return null;
} 


