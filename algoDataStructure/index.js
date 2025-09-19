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
