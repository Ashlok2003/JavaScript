import _ from 'lodash';
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(_.first(myArray));
console.log(_.nth(myArray, 5));

console.log(_.chunk(myArray, 2));
console.log(_.difference(myArray, [1, 4, 5]));

console.log(_.drop(myArray, 4));
console.log(_.take(myArray, 3));

console.log(_.dropRight(myArray, 3));
console.log(_.fill(['a', 'b', 'c'], 0));
console.log(_.head(['a', 'b', 'c']));
console.log(_.last(['a', 'b', 'c']));

console.log(_.compact([0, 1, false, 2, '', 3, 'a', 'e',"f"]));

