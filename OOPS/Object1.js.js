const a = { a: 1, b: 2 };
const b = { b: 4, c: 5 };

console.log(Object.assign(a, b));

const target = Object.defineProperty({}, "ashlok__", {
  value: 1,
  writable: false,
});

const ashlok__ = function () {
  this.name = "ashlok__";
};

ashlok__.prototype.printName = function () {
  console.log(this.name + "Hello People !");
};

console.log(Object.getOwnPropertyDescriptors(ashlok__));

/*******************************************/
