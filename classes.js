/*
    class -> is a template or blueprint for creating objects
*/

// class definiiton
class Car {
    // constructor -> special method which gets called when we create an instance of the class
    constructor() {
        this.make = '';
        this.model = '';
        this.year = 0;
        this.color = '';
    }
}

// we can now take copies of this class by creating instances or objects
// object -> is an instance of a class

const car1 = new Car();
const car2 = new Car();

car1.make = 'Toyota';
car1.model = 'Corolla';
car1.year = 2020;
car1.color = 'Red';

car2.make = 'Honda';
car2.model = 'Civic';
car2.year = 2021;
car2.color = 'Blue';

console.log(car1);
console.log(car2); 