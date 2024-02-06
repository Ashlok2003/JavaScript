//* Creating BigInt numbers
const bigIntNumber1 = BigInt(12345678901234567890);
const bigIntNumber2 = BigInt("98765432109876543210");

//* Performing arithmetic operations
const additionResult = bigIntNumber1 + bigIntNumber2;
const subtractionResult = bigIntNumber2 - bigIntNumber1;
const multiplicationResult = bigIntNumber1 * bigIntNumber2;

//* Using ?? operator to provide default value for a null or undefined result
const defaultValue = BigInt(0);
const result = additionResult ?? defaultValue;

//! Using !! operator to convert values to boolean
const boolResult1 = !!bigIntNumber1;
const boolResult2 = !!null;


console.log("BigInt Number 1:", bigIntNumber1);
console.log("BigInt Number 2:", bigIntNumber2);
console.log("Addition Result:", additionResult);
console.log("Subtraction Result:", subtractionResult);
console.log("Multiplication Result:", multiplicationResult);
console.log("Result with Default Value:", result);
console.log("Boolean Result 1:", boolResult1);
console.log("Boolean Result 2:", boolResult2);
