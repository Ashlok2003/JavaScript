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
