const Array = require('./Array');

let numbers = new Array();

numbers.push(7);
numbers.push(8);
numbers.push(10);

// console.log(numbers.toArray());

// numbers
//     .whileEach((value, index, array) => {
//         console.log(value, index, array, array[index]);
//     })

function cuber(value) {
    return value ** 3;
}

console.log(numbers.transform(cuber));