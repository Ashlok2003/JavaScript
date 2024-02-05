/*
* The higher order function "reduce" takes a list of values and applies a 
* function to each of those values, accumulating a single result. 
*/
/*
! To get the compose order from right to left as we see with nested fn's
! calls in our example above, we need reduceRight.... :)
*/

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const multiplyByTwo = num => num * 2;
const addFive = num => num + 5;
const square = num => num * num;

const composeResult = compose(square, multiplyByTwo, addFive)(3);
console.log(composeResult);

/*
*   To do the same, but read from left to right... we use "pipe".
*   It is the same except uses reduce instead of reduceRight.... 
*/

const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val);
const pipeResult = pipe(addFive, multiplyByTwo, square)(3);
console.log(pipeResult);

const divide = (divisor) => num => num / divisor;
const pipeResult2 = pipe(square, multiplyByTwo, addFive, divide(2))(5);
console.log(pipeResult2);

//!--------------------------------------------------------------------------!//
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
 Nunc vehicula turpis sit amet elit pretium, in volutpat sem scelerisque. 
 Maecenas sagittis pulvinar purus, sed porttitor augue tincidunt id. 
 Donec malesuada orci nec vestibulum lacinia. 
 Cras euismod, neque id lacinia lacinia, nisl nunc tincidunt nunc, 
 in lacinia nunc nunc id nunc. Sed aut eros ultrices pharetra ultricies 
 nec nibh. Mauris accumsan pulvinar nunc, nec ultric`;


const splitonSpace = (string) => string.split(" ");
const countWords = (array) => array.length;

const wordCount = compose(countWords, splitonSpace);
console.log(wordCount(lorem));


//! Lets combine all the essentials steps to check is 
//! the string is palindrome or not !

const split = string => string.split('');
const join = string => string.join('');
const lower = string => string.toLowerCase();
const reverse = array => array.reverse();

const isPalindrome = string => {
    const result = compose(join, reverse, split, lower)(string);
    return result === string.toLowerCase();
}

console.log(isPalindrome('Moms')); 