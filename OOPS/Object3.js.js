const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const ashlok__ = Object.groupBy(inventory, ({ type }) => type);
console.log(ashlok__);

//! Restrict the extensible property of the Object in Javascript

const objects = {};
console.log(Object.isExtensible(objects));

Object.preventExtensions(objects);
console.log(Object.isExtensible(objects));

/*
*   Sealed objects are by definition non-extensible
//! When sealed is applied then we can't delete the properties
*/
const sealed = Object.seal({});
console.log(Object.isSealed(sealed));
console.log(Object.isExtensible(sealed));

//? Frozen Objects are also by defination non-extensible

const frozen = Object.freeze({});
console.log(Object.isFrozen(frozen));
console.log(Object.isExtensible(frozen));

/*  
        Difference of Debounce and Throttle

- **Debounce** delays the execution of a method for a specific amount of 
    time after the last event occurrence. It doesn't hide the existence of 
    the method but postpones its execution until a period of inactivity occurs. 
    It's useful for ensuring that a function is only called after a user has 
    paused their activity, such as typing in a search bar.

- **Throttle** controls the rate at which a method is executed by enforcing a 
    fixed time interval between executions. It doesn't hide the method but limits 
    how frequently it can be invoked. It's useful for regulating the pace of 
    function calls, especially in situations like scroll or resize events.

    So, both debounce and throttle affect when and how often a method is called, 
    but they do so in slightly different ways to achieve specific timing behaviors.

*/
