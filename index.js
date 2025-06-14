// spread and rest operator
// ...
// let numbers = [1, 2, 3, 4, 5];

// spread operator
// breaking the container array numbers into individual elements
// console.log(...numbers);

// console.log(1, 2, 3, 4, 5);

// let nums1 = [1, 2, 4];
// let nums2 = [3, 5, 6];

// let numbers = [...nums2, ...nums1];

// console.log(numbers);

// shallow copy
// let nums1 = [1, 2, 3];

// // I need a copy of nums1
// let nums2 = nums1;

// /*
//     nums1, nums2 = [11, 22, 3]
// */

// nums2[0] = 11;
// nums1[1] = 22;

// console.log(nums1);
// console.log(nums2);

// deep copy
// let nums1 = [1, 2, 3];

// let nums2 = [...nums1];

// /*
//     nums1 = [1, 22, 3]
//     nums2 = [11, 2, 3]
// */

// nums2[0] = 11;
// nums1[1] = 22;

// console.log(nums1);
// console.log(nums2);

// matching arguments
// function add(a, b) {
//     console.log(a + b);
// }

// add(5, 6);

// NaN -> Not A Number

// default arguments
// function add(a, b = 0) {
//     console.log(a + b);
// }

// add(5);

// console.log(typeof ({ id: 1 }));

// default arguments
// function add(a = 0, b = 0) {
//     console.log(a + b);
// }

// add(5, 6);
// add(5);
// add();

// console.log(undefined + 5);

// rest operator
// function add(...rest) {
//     console.log(rest);
// }

// add(5, 6, 7, 8, 9, 10);

// console.log(Math.max(1, 2, 3, 4, 5, 6));

// without destructuring
// name, age, profession
// let nums = ['krish', 25, 'developer'];

// let name = nums[0];
// let age = nums[1];
// let profession = nums[2];

// console.log(name);
// console.log(age);
// console.log(profession);

// destructuring: The process of extracting values from an array or object and assigning them to variables.

// with destructuring
// let nums = ['krish', 25, 'developer'];

// let [name, age, profession] = nums;

// console.log(name);
// console.log(age);
// console.log(profession);

// let [, , profession] = ['krish', 25, 'developer'];

// console.log(profession);

// let [name, age, profession, ...rest] = ['krish', 25, 'developer', 34, 24, 45];

// console.log(name);
// console.log(age);
// console.log(profession);

// console.log(rest); // rest will contain the remaining elements in the array

// let person1 = ['krish', 25, 'developer', 'India'];

// let person2 = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// console.log(typeof person1);
// console.log(typeof person2);

// shallow copy vs deep copy
// shallow copy
// let person1 = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// let person2 = person1;

// person2.name = 'John';

// console.log(person1);
// console.log(person2);

// spread operator
// ...
// let person1 = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// console.log({ ...person1 });
// console.log(name: 'krish', age: 25, profession: 'developer', country: 'India');

// let details1 = {
//     name: 'krish',
//     age: 25,
// }

// let details2 = {
//     profession: 'developer',
//     country: 'India'
// }

// let person = {
//     ...details1,
//     ...details2
// }

// console.log(person);

// deep copy
// let person1 = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// let person2 = { ...person1 };

// person2.name = 'John';

// console.log(person1);
// console.log(person2);


// destructuring objects
// let person = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// let { name, age, country, profession } = person;

// console.log(name);
// console.log(age);
// console.log(profession);
// console.log(country);

// let person = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// let { name, age, country, profession: designation } = person;

// console.log(name);
// console.log(age);
// console.log(designation);
// console.log(country);

// let person = {
//     name: 'krish',
//     age: 25,
//     profession: 'developer',
//     country: 'India'
// }

// let { name, age, ...rest } = person;

// console.log(name);
// console.log(age);
// console.log(rest);
// let word = "apple";
// let sentence1 = 'I love eating ' + word + ' pie.';
// let sentence2 = "I love eating " + word + " pie.";
// let sentence3 = `I love eating ${word} pie.`;

// console.log(sentence1);
// console.log(sentence2);
// console.log(sentence3);


// let sentence = `This is a long sentence that needs to be
// wrapped to the next line.`;

// console.log(sentence);

