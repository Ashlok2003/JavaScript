const person = {
    alive: true
}

const musician = {
    plays: true
}

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));

console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

const gutarist = {
    numberOfStrings: 6,
    __proto__: musician,
}

console.log(gutarist.alive);
console.log(gutarist.plays);
console.log(gutarist.numberOfStrings);

/*
!   1. No Circular references are allowed (person.__proto__ can't be gutarist)
*   2. The __proto__ value must be an object or null.
?   3. An Object can only directly inherit from one object.
*/

//* Javascript don't provide multiple inheritance directly but can achieve using
//* eg: const x = Object.assign({}, a, b);

class Car {
    constructor() {
        this.doors = 2;
        this.seats = "Vinyl + Polyester";
    }

    get seatMaterial() {
        return this.seats;
    }

    set seatMaterial(material) {
        this.seats = material;
    }
}

class LuxuryCar extends Car {
    //! Additional properties or methods for the LuxuryCar can be added here
}

const luxuryCarInstance = new LuxuryCar();
console.log(luxuryCarInstance.__proto__); 
