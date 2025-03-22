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

let count = 2;
do {
    console.log('hello');
    count++;
} while (count != 3);