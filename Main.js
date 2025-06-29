// let numbers = [5, 2, 1, 4, 3];
// let numbers = new Array(5, 2, 1, 4, 3);

// to manage the array -> methods (in-place & non-in-place)
// in-place: modifies the original array
// non-in-place: returns a new array without modifying the original array

// to push an element
// beginning of the array
// numbers.unshift(6);

// end of the array
// numbers.push(7);

// at any index of the array
// args: index position to insert the element, count of elements if any to be deleted, one or more element to insert
// numbers.splice(2, 0, 8);

// to delete an element from the array
// beginning of the array
// numbers.shift();

// end of the array
// numbers.pop();

// at any index of the array
// index: 1
// numbers.splice(1, 1);

// console.log(numbers.slice(0, -3));
// console.log(numbers.includes(5, 2));
// console.log(numbers.indexOf(40));

// console.log(numbers);

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// for (let index in numbers) {
//     console.log(numbers[index]);
// }

// for (let number of numbers) {
//     console.log(number);
// }

// const fun = (number) => {
//     if (number % 2 != 0)
//         return false;
//     else return true;
// }

// Take the array numbers and for each element in the array, run the function `fun` on it.
// numbers.forEach(fun);

// [5, 2, 1, 4, 3]

// console.log(numbers.map(fun));

// console.log(numbers.filter(fun));

// const fun = (num1, num2) => {
//     // console.log(num1, num2);
//     return num1 + num2;
// }

// console.log(numbers.reduce(fun, 10));

// let numbers = [5, 2, 1, 4, 3, 3, 1, 2, 2, 4, 4, 5, 2, 1];

// console.log(numbers.reduce((p, c) => {
//     if (!p.includes(c)) return [...p, c];
//     else return p;
// }, []));

/*
    numbers = [5, 2, 1, 4, 3, 3, 1, 2, 2, 4, 4, 5, 2, 1]

    p = [5, 2, 1, 4, 3]
    c = 1
*/

// let numbers = [5, 2, 1, 4, 3, 11, 12, 25, 100];

// let words = ['apple', 'ant', 'ample', 'ankle', 'angle', 'agile'];

// sort -> arranging elements of the array in ascending order or descending order
// increasing order or decreasing order
// from smallest element to largest element
// from largest element to smallest element

// dictionary order or chronological order
// all a's, then b's, then c's

// words.sort();

// console.log(words);

let numbers = [5, 2, 1, 4, 3];

// numbers.sort((a, b) => {
//     // if (a > b) return 1;
//     // else if (a === b) return 0;
//     // else if (a < b) return -1;

//     return b - a;
// });
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// sorting methods: bubble, insertion, selection, merge, quick, heap, bucket, radix, counting, etc.
// bubble sort
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers);

// in-place: shift, unshift, splice, push, pop, sort
// non in-place: slice, forEach, map, reduce, filter, includes, indexOf