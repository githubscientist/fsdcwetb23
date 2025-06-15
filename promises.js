/*
    Promise -> It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

const promise = new Promise((resolve, reject) => {
    // execute some asynchronous operation
    setTimeout(() => {
        let success = false;

        if (success) {
            resolve();
        } else {
            reject();
        }
    }, 2000);
});

promise
    .then(() => {
        console.log('Promise resolved successfully');
    })
    .catch(() => {
        console.log('Promise rejected');
    })