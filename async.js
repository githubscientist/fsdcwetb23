/*
    await keyword is used to wait for a Promise to resolve or reject.
*/

// async function fetchData() {
//     const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/apple`);
//     const meaning = await data.json();
//     console.log(meaning);
// }

// fetchData();

// let numbers = [4, 1, 3, 2];


// function toSquare(num) {
//     return num * num;
// }

// console.log(numbers.map(toSquare));


// let numbers = [4, 1, 3, 2];

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(numbers.filter(isEven));

let numbers = [4, 1, 3, 2];

function sum(a, b) {
    return a + b;
}

console.log(numbers.reduce(sum));