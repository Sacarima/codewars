BIG O NOTATION

What is Big-o notation?
  - notation to describe the performance of an algorithm
  -emphasizes on how performance scales with input size
  - It's an approximation

Why use Big-o notation ?
  - Allows us to compare peformance of algorithms
  -does notrelay upon enviroment(languages, hardware, etc)


BIG-O SIMPLIFICATION RULES

   - You can drop any constant factors
   example: 0(4n) we can treat the 4 as a constant factor and simplify this as
 ##  O(n)

 note: a factor is a number that multiplies another, a constant factor here rest to a number that does not depend on the input input argument n.

 Another example: O(999n) this will still be simplified as 
 ## O(n)

 1 thing to watch for is when O(n/2) the over two will be treated as a constant factor therefore this will be simplified as
 ## O(n)


   - Drop smaller terms in a sum
   example: O(n^2 + n) in this particular example n is smaller than n^2 therefore its dropper and this is simplified as 
   ## O(n^2)
   In a siilar way is I had (n + n^4 + n^2) this will be simplified as
   ## O(n^4)

   another example:
   O(n^2+n+5). ===> 
   ## (n^2)

   O(n^2/2 + 900) ==>
  ## O(n^2)


  In general we can have worse performing algorithm and better performing algorithm


            ^ Worse
           ||
           ||
           ||
           || O(n!) factorial
           ||
           || O(c^n)-> : O(2^n), O(3^n), ... exponential
           ||
           || O(n^c) : O(n^2)-, O(n^3), O(n^4), ...->->> these are the examples polynomial
           ||
           || O(n) linear
           ||
           || O(log(n)) example: log^2(32) -> 5  logarithm
           ||
           || O(1) constant ---> Its best, the performance does not change with input size.
           ||
           ||
           ||
           ||
           ||
           ||Better
           

If you check for any key in an object it always runs in constant time
the built-in method include takes in O(n) ==> time complexity  LENEAR TIME
under the hood it would have to iterate through every element in the array and compare it with the element inside include
example

## const colors = ["red", "blue", "green", "yellow", "magenta"]
## console.log(colors.includes('green')) 

another example is the split method also runs in lenear time


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
for ( let i = 0; i < letters.length; i++) {
    for ( let j = 0; j < letters.length; j++) {
    console.log(letters[i], letters[j])
 }
}

in this case we'll get 
## O(n * n) ==> O(n^2)

note: the push method, runs in constant time t(1)
      unshift() method runs in linear time

      this is an example using unshift

      const function4 = (n) => {
        cost nums = []
        for ( let i = 1; i < n i += 1 >) {
            nums.unshoft(i)
        }
        return nums
      }

      console.log(function4(10))
      Time: O(n^2)
      space: O(n)
      the unshift method will place an element and shift each element back

charCode is a O(1) constant time complexity,