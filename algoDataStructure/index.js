/*
   FIZZ BUZZ

   Given an interger n, return a string array answer (1-indexed) where:
   - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
   - answer[i] == "Fizz" if i is divisible by 3.
   - answer[i] == "Buzz" if i is divisible by 5.
   - answer[i] == i (as a string) if none of the above conditions are true.

   Example 1:
   Input: n = 3
   Output: ["1","2","Fizz"]

   Example 2:
   Input: n = 5
   Output: ["1","2","Fizz","4","Buzz"]

   Example 3:
   Input: n = 15
   Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

   Constraints:
   1 <= n <= 10^4
*/

var fizzBuzz = function(n) {
    const result = [];
    for(let i = 1; i <= n; i++) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            result.push("FizzBuzz")
        } else if( i % 3 === 0 ) {
            result.push("Fizz")
        }else if ( i % 5 === 0 ) {
            result.push("Buzz")
        }else {
            result.push(i)
        }
    }
    return result
}


/**
 * 
    MAX VALUE
    Write a function, maxValue, that takes in array of numbers as argument. The function should return the largest number in the array.
    Solve this without using any built in array methods.

    You can assume that the array is none empty

    examples:

    maxValue([4, 7, 2, 8, 10, 9]); // -> 10

    maxValue([10, 5, 40, 40.3]); // -> 40.3
    maxValue([-5, -2, -1, -11]); // -> -1
    maxValue([42]); // -> 42
    maxValue([1000, 8]); // -> 1000
    maxValue([1000, 8, 9000]); // -> 9000
    maxValue([2, 5, 1, 1, 4]); // -> 5

    
    Approach,
    we can get this array as an example
    [4, 7, 2, 8, 10, 9]

    lets create a arbritrary variable and assign it to the first index of the array
    lets it be max: then we assign in the smallest number in order to compare it with the rest of the numbers in the array
    in our ase we'll use -Infinity
    max = -Infinity

    now we can compare, is 4 higher than -Infinity? yes it is, so we replace max to 4
    the we  continue and the next numner, if the number is less tnan max we do nothing

    another thing we need to conisder in this type of algorithm is any potential edge cases, EXAMPLE IF WE 
    get an array with negative numbers only
    [-5, -2, -1, -11]
    Negative infinity will still work in this case and its value will come in handy here

    is -5 > -Infinity? yes it is, so we replace max to -5
    then we continue and compare -2 with -5, is -2 > -5? yes it is, so we replace max to -2
    then we continue and compare -1 with -2, is -1 > -2? yes it is, so we replace max to -1
    then we continue and compare -11 with -1, is -11 > -1? no it isnt, so we do nothing

    at the end of the loop we return max

    now lets go over the complexity of this algorithm
    Time complexity: O(n) - linear time, we have to go through the entire array once
    Space complexity: O(1) - constant space, we are using a fixed amount of space regardless of the input size
    

 */




    function maxValue(n) {
        let max = -Infinity; // or we can use n[0] if we assume the array is non empty
        for (let num of n)/**The for of loop in javascript iterates through every element in the array and not the indexes */ {
            if (num > max)/**Check if the current number is greater than the max, meaning I found something bigger, so I should replace the current max number */ {
                max = num; // replace max with the current number(currently the biggest number found)
            }
        }
        return max;
    }

    // test cases
    console.log(maxValue([4, 7, 2, 8, 10, 9])); // -> 10
    console.log(maxValue([10, 5, 40, 40.3])); // -> 40.3
    console.log(maxValue([-5, -2, -1, -11])); // -> -1
    console.log(maxValue([42])); // -> 42
    console.log(maxValue([1000, 8])); // -> 1000
    console.log(maxValue([1000, 8, 9000])); // -> 9000
    console.log(maxValue([2, 5, 1, 1, 4])); // -> 5

    //complexity
    // Time complexity: O(n) - linear time, we have to go through the entire array once
    // Space complexity: O(1) - constant space, we are using a fixed amount of space regardless of the input size

    //another solution using for loop
    function maxValue2(n) {
        let max = -Infinity; // or we can use n[0] if we assume the array is non empty
        for (let i = 0; i < n.length; i++)/**The for loop in javascript iterates through every index in the array */ {
            if (n[i] > max) /**Check if the current number is greater than the max, meaning I found something bigger, so I should replace the current max number */ {
                max = n[i];
            }
        }
        return max;
    }

/*
    Write a function longestWord that takes in a sentance string as am argumaent.
    The function should return the longest word in the sentance. If there is a tie, return the word that occurs later in the sentance.
    you can assume that the sentence is non-empty.


    examples:    longestWord("I love programming"); // -> "programming"
    longestWord("I love dogs"); // -> "love"
    longestWord("fun&!! time"); // -> "time"
    longestWord("I have a pet cat"); // -> "have"
    longestWord("hello hello world"); // -> "world"
    longestWord("abc def ghi"); // -> "ghi"
    longestWord("abc defgh ijk lmno p"); // -> "lmno"  
    longestWord("what a wonderful world"); // -> 'wonderful'
    longestWord("the quick brown fox jumped over the lazy dog"); // -> 'jumped'
    longestWord("who did eat the ham"); // -> 'ham'

    Approach:
    we can start by splitting the string into an array of words using the split method
    then we can iterate through the array of words and keep track of the longest word found so far
    we can use a variable to store the longest word and update it whenever we find a longer word
    if we find a word that is the same length as the longest word, we update it to the new word since we want the one that occurs later in the sentence
    finally, we return the longest word found

    walkthrough:
    let's take the example "I love programming"
    we split the string into an array of words: ["I", "love", "programming"]
    we initialize a variable longest to an empty string
    we iterate through the array of words:
    - first word is "I", its length is 1, which is greater than the length of longest (0), so we update longest to "I"
    - second word is "love", its length is 4, which is greater than the length of longest (1), so we update longest to "love"
    - third word is "programming", its length is 11, which is greater than the length of longest (4), so we update longest to "programming"
    finally, we return longest which is "programming"

    complexity:
    Time complexity: O(n) - linear time, where n is the number of words in the sentence. We have to go through each word once.
    Space complexity: O(1) - constant space, we are using a fixed amount of space regardless of the input size  

 */

    function longestWord(sentance) {
        const words = sentance.split(" "); // split the string into an array of words
        let longest = ""; // initialize a variable to store the longest word
        for (let word of words) { // iterate through the array of words
            if (word.length >= longest.length) { // check if the current word is longer than or equal to the longest word found so far
                longest = word; // update longest to the current word
            }
        }
        return longest; // return the longest word found
    }

    // test cases
    console.log(longestWord("I love programming")); // -> "programming"
    console.log(longestWord("I love dogs")); // -> "love"
    console.log(longestWord("fun&!! time")); // -> "time"
    console.log(longestWord("I have a pet cat")); // -> "have"
    console.log(longestWord("hello hello world")); // -> "world"
    console.log(longestWord("abc def ghi")); // -> "ghi"
    console.log(longestWord("abc defgh ijk lmno p")); // -> "lmno"
    console.log(longestWord("what a wonderful world")); // -> 'wonderful'
    console.log(longestWord("the quick brown fox jumped over the lazy dog")); // -> 'jumped'
    console.log(longestWord("who did eat the ham")); // -> 'ham'


    /**
     
      FIBONACCI SEQUENCE
      write a function that returns the fibonacci sequence up to a given number n.
      The fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
      The sequence goes like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

      examples:
      fibonacci(5); // -> [0, 1, 1, 2, 3]
      fibonacci(10); // -> [0, 1, 1, 2, 3, 5, 8]
      fibonacci(15); // -> [0, 1, 1, 2, 3, 5, 8, 13]
      fibonacci(1); // -> [0]
      fibonacci(2); // -> [0, 1]
      fibonacci(3); // -> [0, 1, 1]
      fibonacci(4); // -> [0, 1, 1, 2]
      fibonacci(20); // -> [0, 1, 1, 2, 3, 5, 8, 13]
      fibonacci(25); // -> [0, 1, 1, 2, 3, 5, 8, 13, 21]

      Approach:
      we can start by initializing an array with the first two numbers of the fibonacci sequence: [0, 1]
      then we can use a while loop to generate the next numbers in the sequence until we reach the given number n
      in each iteration of the loop, we can calculate the next number by adding the last two numbers in the array
      we can then push this new number to the array
      finally, we return the array

      walkthrough:
      let's take the example n = 10
      we initialize an array fib = [0, 1]
      we enter the while loop since the last number in fib (
     
     */

    function fibonacci(n) {
        if (n <= 0) return []; // if n is less than or equal to 0, return an empty array
        if (n === 1) return [0]; // if n is 1, return an array with only the first number of the fibonacci sequence
        const fib = [0, 1]; // initialize an array with the first two numbers of the fibonacci sequence
        while (true) { // use a while loop to generate the next numbers in the sequence
            const next = fib[fib.length - 1] + fib[fib.length - 2]; // calculate the next number by adding the last two numbers in the array
            if (next >= n) break; // if the next number is greater than or equal to n, break the loop
            fib.push(next); // push the new number to the array
        }
        return fib; // return the array
    }

    // test cases
    console.log(fibonacci(5)); // -> [0, 1, 1, 2, 3]
    console.log(fibonacci(10)); // -> [0, 1, 1, 2, 3, 5, 8]
    console.log(fibonacci(15)); // -> [0, 1, 1, 2, 3, 5, 8, 13]
    console.log(fibonacci(1)); // -> [0]
    console.log(fibonacci(2)); // -> [0, 1]
    console.log(fibonacci(3)); // -> [0, 1, 1]
    console.log(fibonacci(4)); // -> [0, 1, 1, 2]
    console.log(fibonacci(20)); // -> [0, 1, 1, 2, 3, 5, 8, 13]
    console.log(fibonacci(25)); // -> [0, 1, 1, 2, 3, 5, 8, 13, 21]

    // complexity
    // Time complexity: O(m) - linear time, where m is the number of fibonacci numbers less than n. We have to go through each number once.
    // Space complexity: O(m) - linear space, where m is the number of fibonacci numbers less than n. We are storing all the fibonacci numbers in an array. 


    function fibonacci2(n) {
        if ( n > 2 ) return n 
        let result = [0, 1]
        for  ( let i = 2; i < n; i++ )  {
            result[i] = result[i - 1] + result[i - 2]
        }
        return result  
    }

    console.log(fibonacci2(5)); // -> [0, 1, 1, 2, 3]
    console.log(fibonacci2(10)); // -> [0, 1, 1, 2, 3, 5, 8]
    console.log(fibonacci2(15)); // -> [0, 1, 1, 2, 3, 5, 8, 13]
    console.log(fibonacci2(1)); // -> [0]
    console.log(fibonacci2(2)); // -> [0, 1]
    console.log(fibonacci2(3)); // -> [0, 1, 1]
    console.log(fibonacci2(4)); // -> [0, 1, 1, 2]
    console.log(fibonacci2(20)); // -> [0, 1, 1, 2, 3, 5, 8, 13]
    console.log(fibonacci2(25)); // -> [0, 1, 1, 2,

/*
    IS PRIME

    Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating 
    whether or not the given number is prime.

    A prime number is a number that is only divisible by itself and 1.
    For example, 7 is a prime number because it is only divisible by 1 and 7.
    4 is not a prime number because it is divisible by 1, 2, and 4.

    You can assume that the input number is a positive integer.

    examples:
    isPrime(2); // -> true
    isPrime(3); // -> true
    isPrime(4); // -> false
    isPrime(5); // -> true
    isPrime(6); // -> false
    isPrime(7); // -> true
    isPrime(8); // -> false
    isPrime(9); // -> false
    isPrime(10); // -> false
    isPrime(11); // -> true
    isPrime(12); // -> false
    isPrime(13); // -> true
    isPrime(14); // -> false
    isPrime(15); // -> false
    isPrime(2); // -> true

    Approach
    input : 7 true
    innput : 11 true
    if I can find a number that can divide with the number other than one and itself then that cannot possibly be a prime number

     check any possible deviiser and factor of 7, and what range will they be ?
    since out example is 7 the range will be from 2- 6 but not including 7
    2,3,4,5,6.

    we are not including 1 because 1 is. a factor of 7, and we're not including 7 for the same reason
    now we are ready to iterate

   then I an check, is my input 2 devisible by 2? No, since its not I move to the next number 
   is 7 devisible by 3, I continue this on until I reach 6, if thee are no devisible number by 7 then it means
   7 is indeed a prime number because it can only be devisible by one and itself

    complexity
    Time complexity: O(n) - linear time, where n is the input number. In the worst case, we have to check all numbers from 2 to n-1.
    Space complexity: O(1) - constant space, we are using a fixed amount of space regardless of the input size.
    edge cases:
    1 is not a prime number
    2 is the only even prime number
    negative numbers are not prime numbers
    0 is not a prime number
    1 is not a prime number
    2 is the only even prime number
    negative numbers are not prime numbers
    0 is not a prime number 
    1 is not a prime number

    0 is not a prime number


*/

function isPrime(n) {
    if ( n < 2 ) return false; // edge case, 0 and 1 are not prime numbers
    for ( let i = 2; i < n; i++ ) { // iterate from 2 to n-1
        if ( n % i === 0 ) return false; // if n is divisible by i, then n is not a prime number
    }
    return true; // if no divisors were found, then n is a prime number
}

// test cases
console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(5)); // -> true
console.log(isPrime(6)); // -> false
console.log(isPrime(7)); // -> true
console.log(isPrime(8)); // -> false
console.log(isPrime(9)); // -> false
console.log(isPrime(10)); // -> false

//complexity
// Time complexity: O(n) - linear time, where n is the input number. In the worst case, we have to check all numbers from 2 to n-1.
// Space complexity: O(1) - constant space, we are using a fixed amount of space regardless of the input size.

function isPrime2(n) {
    if ( n < 2 ) return false; // edge case, 0 and 1 are not prime numbers
    for ( let i = 2; i <= Math.sqrt(n); i++ ) { // iterate from 2 to the square root of n
        if ( n % i === 0 ) return false; // if n is divisible by i, then n is not a prime number
    }
    return true; // if no divisors were found, then n is a prime number
}

// test cases
console.log(isPrime2(2)); // -> true
console.log(isPrime2(3)); // -> true
console.log(isPrime2(4)); // -> false
console.log(isPrime2(5)); // -> true
console.log(isPrime2(6)); // -> false
console.log(isPrime2(7)); // -> true
console.log(isPrime2(8)); // -> false
console.log(isPrime2(9)); // -> false
console.log(isPrime2(10)); // -> false
console.log(isPrime2(11)); // -> true
console.log(isPrime2(12)); // -> false
console.log(isPrime2(13)); // -> true
console.log(isPrime2(14)); // -> false
console.log(isPrime2(15)); // -> false
console.log(isPrime2(1)); // -> false
console.log(isPrime2(0)); // -> false
console.log(isPrime2(-5)); // -> false
console.log(isPrime2(29));

//complexity
// Time complexity: O(sqrt(n)) - square root time, where n is the input number. In the worst case, we have to check all numbers from 2 to sqrt(n).
// Space complexity: O(1) - constant space, we are using a fixed amount of space regardless of the input size.


/*
    PAIRS

    Write a function, pairs, that takes in an array as an argument. The function should return 
    an array containing all unique pairs of elements.

    you may return the pairs in any order and the order of elements within a single pair does not matter.
    You can assume that the input array contains unique elements.

    examples:
    pairs(["a", "b", "c"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]

 ab, ac, bc
 a, b, c
 a, b, c
 ab ac
*/

function pairs(arr) {
    const result = []

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            let add = [arr[i], arr[j]]
            result.push(add)
        }
    }

    return result
}

//complexity
// Time complexity: O(n^2) - quadratic time, where n is the length of the input array. We have a nested loop that goes through each element in the array.
// Space complexity: O(n^2) - quadratic space, where n is the length of the input array. In the worst case, we may have to store all possible pairs in the result array.

// different solution
function pairs2(arr) {
    const result = []

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (i !== j) {
                let add = [arr[i], arr[j]]
                let reversedAdd = [arr[j], arr[i]]
                if (!result.some(pair => (pair[0] === add[0] && pair[1] === add[1]) || (pair[0] === reversedAdd[0] && pair[1] === reversedAdd[1]))) {
                    result.push(add)
                }
            }
        }
    }

    return result
}

// test cases
console.log(pairs(["a", "b", "c"])); // -> [ ["a", "b"], ["a", "c"], ["b", "c"] ]
console.log(pairs([1, 2, 3])); // -> [ [1, 2], [1, 3], [2, 3] ]
console.log(pairs(["a", "b", "c", "d"])); // -> [ ["a", "b"], ["a", "c"], ["a", "d"], ["b", "c"], ["b", "d"], ["c", "d"] ]
console.log(pairs([1, 2, 3, 4])); // -> [ [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4] ]
console.log(pairs(["x", "y", "z"]));

// complexity
// Time complexity: O(n^2) - quadratic time, where n is the length of the input array. We have a nested loop that goes through each element in the array.
// Space complexity: O(n^2) - quadratic space, where n is the length of the input array. In the worst case, we may have to store all possible pairs in the result array.    