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
// let numbers = [5, 3, 1, 4, 2];

// numbers.push(7);
// numbers.push(6);
// numbers.push(10, 12, 11);

// console.log(numbers);

// Array: To store multiple elements in a variable
// let numbers = [3, 7, 1, 6, 2, 4, 5];

// Javascript arrays supports storing multiple data types
// let fruits = ["apple", "orange", "watermelon", "banana", "grapes"];

// let person = ["sathish", 35, "software developer", ["cooking", "fishing"]];

/*
    [3, 7, 1, 6, 2, 4, 5]
    [0][1][2][3][4][5][6]
*/

// index: location of a particular value inside the array.
// console.log(numbers);

// to access the first value
// console.log(numbers[0]);

// to access the second value
// console.log(numbers[1]);

// data manipulation: create an array, add elements, modify elements, delete an element, search, computations, traversal

// let numbers = [3, 1, 2, 4, 5];

// // push: to push an element to the end of the array
// numbers.push(6);
// numbers.push(7);
// numbers.push(8, 9, 10);

// // unshift: to push an element to the beginning of the array
// numbers.unshift(11);
// numbers.unshift(12);
// numbers.unshift(13, 14, 15);

// // pop: to remove an element from the end of the array
// numbers.pop();
// numbers.pop();

// // shift: to remove an element from the beginning of the array
// numbers.shift();
// numbers.shift();

/*
    [15, 11, 1, 4, 5, 6, 7, 8]
    [0] [1] [2] [3][4][5][6][7][8][9][10]
*/

// to insert an element at any position
// numbers.splice(6, 5, 10);

// to delete an element at any position
// numbers.splice(2, 5);

// for (let i = 1; i <= 3; i++) {
//     numbers.splice(i, 1);
// }

// console.log(numbers);

// -----------------

// let numbers = [3, 1, 2, 4, 5];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);


// iteration or traversal: visiting all the elements inside an array
// from the first to the last

// task: to print all the elements of an array

/*
    [3, 1, 2, 4, 5]
    [0][1][2][3][4]

    index: 0, 1, 2, 3, 4,
    stop: index == 5, index > 5
    run: index < 5
*/

// let numbers = [3, 1, 2, 4, 5];

// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }


// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

// let numbers = [3, 1, 2, 4, 5];
// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// ES6: 2015
// for...in, for...of

// let numbers = [3, 1, 2, 4, 5];

// // for...in loop
// // index: 0, 1, 2, 3, 4
// // for (let index in numbers) {
// //     console.log(numbers[index]);
// // }

// // for...of
// for (let number of numbers) {
//     console.log(number);
// }

// dependency: callbacks
// array methods: forEach, map, reduce, filter

/*
    Object:
        Array [value, ...],
        JS Object {key:value, ...}

    [] -> Arrays
    {} -> JS Object or Object

    JSON - JS Object

    JSON: JavaScript Object Notation
    JSON String - ""
*/

// console.log(typeof {})

// let personArray = ["sathish", 35, "developer"]

// let personObject = {
//     name: "sathish",
//     age: 35,
//     profession: "developer"
// }

// console.log(personArray[0]);
// console.log(personObject["profession"]);
// console.log(personObject.name);

// to convert JS object to JSON string
// console.log(JSON.stringify(personObject));

// let JSONString = '{"name":"sathish","age":35,"profession":"developer"}';

// console.log(JSONString);

// console.log(JSON.parse(JSONString));
// console.log(personObject);

// let personArray = ["sathish", 35, "developer"]

// let personObject = {
//     name: "sathish",
//     age: 35,
//     profession: "developer"
// }

// for (let key in personObject) {
//     console.log(key, personObject[key]);
// }

// coding best practices
// variable names, function names, class names, object names, references -> meaningful or associated with the context
// variable names -> camelCase
// method names -> camelCase or preferrably all lowercase or method_name
// class names -> Uppercase
// object names -> all lowercase or camelCase object_name


// --------------------

// JS Object
// const JSObject = {
//     name: 'abc',
//     age: 20,
//     isEligible: true,
//     salary: 10000,
//     hobbies: [
//         'fishing',
//         'cooking',
//         'driving'
//     ],
//     values: {
//         key1: 'value1',
//         key2: 'value2'
//     }
// }

// // to JSON String
// let JSONString = JSON.stringify(JSObject);

// '{"name":"abc","age":20,"isEligible":true,"salary":10000,"hobbies":["fishing","cooking","driving"],"values":{"key1":"value1","key2":"value2"}}'

// console.log(typeof JSONString);

// console.log(JSONString[1]);

// console.log(JSON.parse(JSONString).values["key1"]);

// const JSObjects = [
//     {
//         name: 'abc',
//         age: 20,
//         isEligible: true,
//         salary: 10000,
//         hobbies: [
//             'fishing',
//             'cooking',
//             'driving'
//         ],
//         values: {
//             key1: 'value1',
//             key2: 'value2'
//         }
//     },
//     {
//         name: 'xyz',
//         age: 25,
//         isEligible: false,
//         salary: 20000,
//         hobbies: [
//             'reading',
//             'writing'
//         ],
//         values: {
//             key1: 'value3',
//             key2: 'value4'
//         }
//     }
// ]

// const JSObject = {
//     name: 'abc',
//     age: 20,
//     isEligible: true,
//     salary: 10000,
//     hobbies: [
//         'fishing',
//         'cooking',
//         'driving'
//     ],
//     values: {
//         key1: 'value1',
//         key2: 'value2'
//     }
// }

// Object.entries(JSObject)
//     .forEach((entry) => {
//         console.log(entry[0], entry[1]);
//     })

// for (let key in JSObject) {
//     console.log(key, JSObject[key]);
// }

// console.log(Object.keys(JSObject));

// console.log(Object.values(JSObject));

// console.log(Object.entries(JSObject));

// for (let index = 0; index < Object.keys(JSObject).length; index++) {
//     console.log(Object.keys(JSObject)[index], JSObject[Object.keys(JSObject)[index]]);
// }

// Object.keys(JSObject)
//     .forEach(key => {
//         console.log(key, JSObject[key]);
//     })

// Object.values(JSObject)
//     .forEach(value => {
//         console.log(value);
//     })

// Object.entries(JSObject)
//     .forEach((entry) => {
//         console.log(entry[0], entry[1]);
//     })

// Hoisting and Scope
// Scope: the visibility of a variable or acessibility of a variable
/*
    Types of Scopes:

    - Global Scope
        - The variable is accessible anywhere in the program
        - The variable is declared outside of any function or block
    - Local Scope
        - The variable is accessible only inside the function or block
        - The variable is declared inside a function or block
    - Block Scope
        - The variable is accessible only inside the block
        - The variable is declared inside a block
        - let, const
    - Function Scope
        - The variable is accessible only inside the function
        - The variable is declared inside a function
*/

// let x = 10; // global scope
// let keyword -> block scope

// {
//     let x = 20; // block scope
//     // this is a block
//     console.log(x);
// }

// console.log(x);
// var keyword -> function scope

// var x = 10;

// // var x = 20;// latest value

// {
//     var x = 20;
//     // this is a block
//     console.log(x);
// }

// console.log(x);

// // let -> block scope
// for (let i = 1; i <= 10; i++);
// console.log(i);

// var -> function scope
// for (var i = 1; i <= 10; i++);
// console.log(i);

// const x = 10;

// x = 20;

// console.log(x);

/*
    Hoisting:
        - The process of moving the variable and function declarations to the top of the scope
*/

// x = 5;

// console.log(x);
// var x; // hoisted to the top

// sayHello();

// var sayHello = function () {
//     console.log("Hello!");
// }