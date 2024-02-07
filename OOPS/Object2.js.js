const __country__ = {
  name: "Japan",
  country_code: "jpn",

  get info() {
    return `This is information about ${this.name} (${this.country_code}).`;
  },
};
/*
! Basically, when we assing an properties of one object to another then the methods are assigned as a variable 
! so to prevent this we have to follow up by complete assign ! approach defined below
*/
let copy = Object.assign({}, __country__);
console.log(copy);

function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    Object.getOwnPropertySymbols(sources).forEach((symbol) => {
      const descriptor = Object.getOwnPropertyDescriptor(sources, source);

      if (descriptor.enumerable) {
        descriptors[symbol] = descriptor;
      }
    });

    Object.defineProperties(target, descriptors);
  });

  return target;
}

copy = completeAssign({}, __country__);
console.log(copy);
