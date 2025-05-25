// let numbers = [4, 3, 1, 6, 2, 5];

// function cuber(value) {
//     return value ** 3;
// }

// console.log(numbers.map(cuber));

// function calc(num1, num2, exec) {
//     const result = exec(num1, num2);
//     console.log(result);
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function mul(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num1 / num2;
// }

// calc(5, 6, div);

// let numbers = [4, 3, 1, 6, 2, 5];

// let firstFunction = (callback) => {
//     console.log('Starting first function...');
//     setTimeout(() => {
//         console.log('Finishing first function...');
//         callback();
//     }, 1000);
// }

// let secondFunction = (callback) => {
//     console.log('Starting second function...');
//     setTimeout(() => {
//         console.log('Finishing second function...');
//         callback();
//     }, 2000);
// }

// let thirdFunction = (callback) => {
//     console.log('Starting third function...');
//     setTimeout(() => {
//         console.log('Finishing third function...');
//         callback();
//     }, 3000);
// }

// firstFunction(function () {
//     secondFunction(function () {
//         thirdFunction(function () {
//             console.log('Finishing all functions!!!');
//         })
//     })
// })

// firstFunction(secondFunction(thirdFunction(function () {
//     console.log('Finishing all functions!!!');
// })))

// (() => {
//     console.log('Starting first function...');
//     setTimeout(() => {
//         console.log('Finishing first function...');
//         (function () {
//             () => {
//                 console.log('Starting second function...');
//                 setTimeout(() => {
//                     console.log('Finishing second function...');
//                     (function () {
//                         () => {
//                             console.log('Starting third function...');
//                             setTimeout(() => {
//                                 console.log('Finishing third function...');
//                                 (function () {
//                                     console.log('Finishing all functions!!!');
//                                 })();
//                             }, 3000);
//                         }
//                     })();
//                 }, 2000);
//             }
//         })();
//     }, 1000);
// })();

/*
    let firstFunction = () => {
    console.log('Starting first function...');
    setTimeout(() => {
        console.log('Finishing first function...');
        function () {
            () => {
                console.log('Starting second function...');
                setTimeout(() => {
                    console.log('Finishing second function...');
                    function () {
                        () => {
                            console.log('Starting third function...');
                            setTimeout(() => {
                                console.log('Finishing third function...');
                                function () {
                                    console.log('Finishing all functions!!!');
                                }
                            }, 3000);
                        }
                    }
                }, 2000);
            }
        }
    }, 1000);
}

Starting first function...
Finishing first function...
Starting second function...
Finishing second function...
Starting third function...
Finishing third function...
Finishing all functions!!!
*/

// setTimeout(() => {


//     console.log('completed 1s');
// }, 1000);

// setTimeout(() => {
//     console.log('completed 2s');
// }, 2000);

// setTimeout(() => {
//     console.log('completed 3s');
// }, 3000);

// setTimeout(() => {
//     console.log('completed 1s');
//     setTimeout(() => {
//         console.log('completed 2s');
//         setTimeout(() => {
//             console.log('completed 3s');
//         }, 3000);
//     }, 2000);
// }, 1000);



// Promise -> resulting object of an eventually completing or failing of an asynchronous operation.

// let promise = new Promise((resolve, reject) => {
//     let randomValue = Math.floor(Math.random() * 10);
//     if (randomValue > 5) {
//         resolve(randomValue);
//     } else {
//         reject(randomValue);
//     }
// });

// promise
//     .then(
//         (value) => {
//             console.log('function resolve called!');
//             console.log(value);
//         }
//     )
//     .catch(
//         (value) => {
//             console.log('function reject called!');
//             console.log(value);
//         }
//     )