class Rectangle {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Cuboid extends Rectangle {
    
    //* Private properties aren't get inherited into the child class...

    constructor(length, width, height) {
        super(length, width);
        this.height = height;
    }

    getArea() {
        return this.height * super.getArea();
    }
}

const cuboid = new Cuboid(5, 6, 7);
console.log(`Surface Area: ${cuboid.getArea()}`);