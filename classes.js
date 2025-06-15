/*
    class -> is a template or blueprint for creating objects
*/

// class definiiton
class Car {
    // constructor -> special method which gets called when we create an instance of the class
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // method -> function inside a class
    getPrice() {
        if (this.model === 'Corolla') {
            return 25000;
        } else if (this.model === 'Civic') {
            return 22000;
        } else {
            return 20000;
        }
    }

    printDetails() {
        console.log(`Car Details: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
}

// we can now take copies of this class by creating instances or objects
// object -> is an instance of a class

const car1 = new Car('Toyota', 'Corolla', 2020, 'Red');
const car2 = new Car('Honda', 'Civic', 2021, 'Blue');

/*
    car1 = Car {
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        color: 'Red'
    }
*/

// console.log(car1.model, car1.getPrice());

car1.printDetails();
car2.printDetails();