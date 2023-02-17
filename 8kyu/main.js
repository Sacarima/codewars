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