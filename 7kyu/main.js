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