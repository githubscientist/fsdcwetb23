// This is a comment line

/*
    I can type whatever I want
    in this block
    in multiple lines
*/

// // The following line assigns a value 10 to a variable number
// var number = 10;

// // To print the value stored in the variable number
// console.log(number);

// Variables -> Changeables
// let number = 10;

// number = 20;

// console.log(number);

// Constants -> The values cannot be changed once assigned
// const number = 10;

// // number = 20; // This will throw an error

// console.log(number);

// number = 10

// number = 20

// console.log(number)

// let number = 10;

// let number = "ten";

// console.log(number);

// let value = 5;

// console.log(typeof value);

// let value = 'apple';

// console.log(typeof value);

// let value = false;

// console.log(typeof value);

// let number = 5;

// number = 'five';

// number = true;

// console.log(number);
// console.log(typeof number);

/*
DataTypes: type of data we store in a variable
    - number
    - string
    - boolean
    - object
        - array
        - json object
*/

// var x = 20;

// var x = "twenty";

// console.log(x);

// datatype: the type of value we store in a variable
// number, boolean, string, object - array & json object

// let age = 24;

// console.log(typeof age);

// let grade = 8.67;

// console.log(grade, typeof grade);

// let isEligible = false;

// console.log(typeof isEligible);

// let word = `apple@123`;

// console.log(word);

// let ages = [25, 12, 36, 73, 30];

// console.log(ages);

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits);

// let fruit = "apple";

// console.log(fruit);

// let person1 = ["sathish", 35, "software developer"];

// console.log(person1);

// let person1 = {
//     name: "sathish",
//     age: 35,
//     profession: "software developer"
// }

// console.log(person1.profession);

// Create an object that has details about your name, age, profession, hobbies
// let person1 = {
//     name: "sathish",
//     age: 35,
//     profession: "software developer",
//     hobbies: {
//         hobby1: "fishing",
//         hobby2: "cooking"
//     }
// }

// console.log(person1.hobbies.hobby2);

// Operators
/*
    Operator
        is a symbol
        to perform an operation
        arithmetic
        relational
        logical
        = assignment
*/

// let x = 5;

/*
    Arithmetic Operators
        + addition
        - subtraction
        * multiplication
        / division
        % modulo division
        ++ increment
        -- decrement
        ** exponentiation
*/

// let x = 10;

// x++; // x = 11

// x++; // x = 12

// x++; // x = x + 1

// x--; // x = x - 1

// console.log(x);

// let a = 5;
// let b = 6;

// console.log(a + b);

// console.log(5 + 6, 5 - 6, 5 * 6, 5 / 6, 5 % 6, 5 ** 6);

/*
    Relational Operators

    < less than
    > greater than
    <= less than or equal to
    >= greater than or equal to
    == double equal to or comparison (value checking)
    != not equal to
    === triple equal to (both value and type checking)
    !== not double equal to (both value and type checking)
*/

/*
    Given the age of the person, check whether the person is eligible to vote or not.

    Eligibility Criteria:

        - Should be atleast 18 years old.
*/

// let name = 'prakash';
// let age = 17;

// console.log(age >= 18);

/*
    Given the age of the person and whether the person has an aadhar card or voter ID, check whether the person is eligible to vote or not.

    Eligibility Criteria:

        - Should be atleast 18 years old.
        - Should have one of the following ID's
            - Aadhar Card
            - Voter ID
*/

// let age = 16;
// let hasAadhar = false;
// let hasVoterID = true;

// // // console.log(age >= 18, hasAadhar == true, hasVoterID == true);

// console.log(age >= 18 && (hasAadhar == true || hasVoterID == true));

// Conditional Statements

/*
    Given the age of the person, check whether the person is eligible to vote or not.

    Eligibility Criteria:

        - Should be atleast 18 years old.
*/

// let age = 20;

// if (age >= 18) {
//     // if block
//     // this block is executed if the condition is true
//     console.log("You are eligible to vote!");
// }
// else {
//     // else block
//     // this block is executed if the condition is false
//     console.log("You are not eligible to vote!");
// }

// let age = 18;
// let hasAadhar = false;
// let hasVoterID = true;

// if (age >= 18 && (hasAadhar == true || hasVoterID == true)) {
//     console.log('You are eligible to vote!');
// }
// else {
//     console.log('You are not eligible to vote!');
// }

// Exercise: 1 Given a number check whether the number is positive or negative.
// Exercise: 2 Given a number check whether the number is even number or odd number.

/*

    let number = 10;

    if () {

    } else {

    }

*/

// Looping Statements
// for, while, do...while

// while loop
// let count = 0;
// while (count != 3) {
//     console.log('hello');
//     count++;
// }

// for loop
// for (let count = 0; count != 3; count++) {
//     console.log('hello');
// }


// for (let count = 0; count != 3; count++) {
//     console.log('hello');
// }

// let count = 0;
// while (count != 3) {
//     console.log('hello');
//     count++
// }

// count = 2;
// do {
//     console.log('hello');
//     count++;
// } while (count != 3);

// let x = 5;

// x++;

// console.log(++x, x++);


/*
    count = 0

    hello
    count = 1

    hello
    count = 2

                    count == 3 stop
                    count > 3 stop
                                        < > =
                    stop: count >= 3
                    run: count < 3

    hello
    count = 3
*/

// let count = 0;
// while (count < 3) {
//     console.log('hello');
//     count++;
// }

/*
    bitwise operators:

    &
    ^
    |
    ~
    <<
    >>

    shorthand operators:

    &=
    |=
    ^=
    +=
    -=
    *=
    /=
*/

// let count = 3;
// do {
//     console.log('hello');
//     count++;
// } while (count < 3);

/*
    ++ pre-increment, post-increment
    -- pre-decrement, post-decrement
*/

// let x = 10;

// // x++;
// // ++x;

// console.log(x++);
// console.log(x);

/*
    count = 30

    hello
    count = 31

    hello
    count = 32

    hello
    count = 33

    count = 3

    hello
    count = 2

    hello
    count = 1

    hello
    count = 0

        count = 0
        count < 0 (-1, -2, -3)

        stop: count <=0
        run: count > 0
*/

// let count = 3;
// while (count > 0) {
//     console.log('hello');
//     count--;
// }


// for (let count = 3; count > 0; count--) {
//     console.log('hello');
// }

// let count = 3;
// do {
//     console.log('hello');
//     count--;
// } while (count > 0);

// functions: a function is a block of statements that gets executed
// whenever we call it.

// Task: Given two numbers, add the numbers and multiply the numbers
// and print the results.

// let number1 = 5;
// let number2 = 6;

// // add the numbers
// let sum = number1 + number2;

// // multiply the numbers
// let product = number1 * number2;

// // print the results
// console.log(sum, product);

// function add(number1, number2) {
//     return number1 + number2;
// }

// function multiply(number1, number2) {
//     return number1 * number2;
// }

// // using functions
// let number1 = 5;
// let number2 = 6;

// // add the numbers
// let sum = add(number1, number2);

// // multiply the numbers
// let product = multiply(number1, number2);

// // print the results
// console.log(sum, product);


// function add(number1, number2) {
//     return number1 + number2;
// }

// console.log(add(54, 67));
// console.log(add(5, 6));
// console.log(add(2, 24));
// console.log(add(21, 100));

// Create a function to print whether a number is odd number or even number.
// let num2 = 3;
// let output = check(num2)
// function check(num2) {
//     if (num2 % 2 === 0) {
//         return "is even number"
//     }
//     else {
//         return "is odd number"
//     }
// }

// console.log(num2, output)

// function oddeven(num) {
//     if (num % 2 == 0)
//         return "even";
//     else
//         return "odd";
// }
// result = oddeven(4)
// console.log(result)


// function Validate(number) {
//     if (number % 2 == 0) {
//         return 'Even number';
//     }
//     else {
//         return 'Odd number';
//     }

// }
// let number = Validate(123);

// console.log(number)

// function evenOdd(num) {
//     if (num % 2 === 0) {
//         return "is an even number.";
//     } else {
//         return "is an odd number.";
//     }
// }

// let number = 10;
// console.log(number, evenOdd(number))

// let number1 = input(3);

// function input(number1) {
//     if (number1 % 2 == 0) {
//         console.log("even number");
//     } else {
//         console.log("odd number")
//     }

// } 

// function check(number) {
//     let result = number % 2;
//     if (result == 0) {
//         console.log("number is even number")
//     }
//     else {
//         console.log("number is odd number")
//     }
// }

// check(7)

// function check(number) {
//     if (number % 2 == 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(check(6));

/*
    5 / 2 = Quotient = 2.5,
    5 % 2 = remainder = 1
*/

// function func(number) {
//     return number;
// }

// console.log(func(5));

// function add(number1, number2) {
//     return number1 + number2;
// }

// let number1 = 5;
// let number2 = 6;

// let sum = add(number1, number2);

// console.log(sum);

/*
    functions types:

    - named functions
    - nameless or anonymous functions
        - function expressions
        - arrow functions
        - IIFE: Immediately Invoked Function Expression
*/

// named functions
// function function_name
// function add(number1, number2) {
//     return number1 + number2;
// }

// // function expression or anonymous or nameless functions
// let add = function (number1, number2) {
//     return number1 + number2;
// }

// function expression or anonymous or nameless functions or arrow functions (ES6: Ecma Script 6, 2015)
// let add = (number1, number2) => {
//     return number1 + number2;
// }

// // let add = (number1, number2) => number1 + number2;
// let number1 = 5;
// let number2 = 6;

// // IIFE: Immediately Invoked Function Expression
// let sum = ((number1, number2) => {
//     return number1 + number2;
// })(number1, number2);

// console.log(sum);

// let add = (number1, number2) => number1 + number2;
// let number1 = 5;
// let number2 = 6;

// // IIFE: Immediately Invoked Function Expression
// console.log(((number1, number2) => {
//     return number1 + number2;
// })(number1, number2));

// let number1 = 5;
// let number2 = 6;

// // IIFE
// console.log((function (number1, number2) {
//     return number1 + number2;
// })(number1, number2));


// Function to check whether the number is even or odd number

// named function
// function isEvenOrOdd(number) {
//     if (number % 2 == 0) console.log(number, 'is even!');
//     else console.log(number, 'is odd!');
// }

// isEvenOrOdd(6);
// isEvenOrOdd(5);
// isEvenOrOdd(7);

// function expression
// let isEvenOrOdd = function (number) {
//     if (number % 2 == 0) console.log(number, 'is even!');
//     else console.log(number, 'is odd!');
// }

// isEvenOrOdd(6);

// arrow function
// let isEvenOrOdd = (number) => {
//     if (number % 2 == 0) console.log(number, 'is even!');
//     else console.log(number, 'is odd!');
// }

// isEvenOrOdd(6);

// iife function
// ((number) => {
//     if (number % 2 == 0) console.log(number, 'is even!');
//     else console.log(number, 'is odd!');
// })(6);

// (function (number) {
//     if (number % 2 == 0) console.log(number, 'is even!');
//     else console.log(number, 'is odd!');
// })(6);

// array: to store multiple elements or values in a variable.
// let x = 10;

// console.log(x);

// let numbers = [1, 2, 3, 4, 5];
/*
    numbers = [1, 2, 3, 4, 5]
              [0][1][2][3][4]
*/

// to print the entire array
// console.log(numbers); 

// to print the first element in the array
// console.log(numbers[0]);

// console.log(numbers[1]);

// console.log(numbers[4]);

// let numbers = [1, 2, 3, 4, 5];

// // arrays are mutables or changeables
// numbers[0] = 11;

// console.log(numbers);

// methods
let numbers = [5, 3, 1, 4, 2];

numbers.push(7);
numbers.push(6);
numbers.push(10, 12, 11);

console.log(numbers);