class Student {
    // constructors are special methods for initializing new objects
    // they are called when a new instance of the class is created
    constructor() {
        this.name = '';
        this.age = 0;
        this.grade = '';
    }

    score() {
        return this.grade === 'A' ? 100 : this.grade === 'B' ? 80 : this.grade === 'C' ? 60 : 0;
    }
}

// new keyword is used to create a new instance of the class
const student1 = new Student();
const student2 = new Student();

student1.name = 'Alice';
student1.age = 20;
student1.grade = 'A';

student2.name = 'Bob';
student2.age = 22;
student2.grade = 'B';

// console.log(student1);
// console.log(student2);

// let students = [student1, student2];

// console.log(students);

console.log(student2.score());

const numbers = new Array();
numbers.push(5);

console.log(numbers);