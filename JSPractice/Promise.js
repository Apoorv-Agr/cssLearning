const fetch = require("node-fetch");


const keys = ["name", "age"];
const values = ["Lydia", 22];

const method = 'fromEntries';
const myResp = Object.fromEntries(keys.map((_, idx) => {
    return [keys[idx], values[idx]];
}))

/* const myResp = Object[method](keys.map((el, i) => {
    console.log('el : ', el)
    return [keys[i], values[i]]
})); */

// console.log('myResp : ', myResp)

/*
    Explaination :-
        The fromEntries method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the keys array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.
        This creates an array of subarrays containing the correct keys and values, which results in { name: "Lydia", age: 22 }
 */


// Promise All 

/* const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
    // const res1 = await Promise.all([promise1, promise2]);
    const res2 = await Promise.all([promise3, promise4]);
    console.log('res2 : ', res2);
    // return [res1, res2];
    return [res2];
};

runPromises().then((res) => {
    console.log('res : ', res);
}).catch((err) => {
    console.log('err : ', err);
}); */

/* 
    Concept :- The function passed to the promise is called executor
    (resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 3000);
    }  
*/

/* let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done")
    }, 3000);
}); */

// Excercise :- Delay with a promise
function delay(ms) {
    // your code
    const delayPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
    return delayPromise;
}

// delay(3000).then(() => console.log('runs after 3 seconds'));

// Promise Chaining

/* new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 3000); // (*)

}).then(function (result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    console.log(result); // 2
    return result * 2;

}).then(function (result) {

    console.log(result); // 4
    return result;

}); */


new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1500);

}).then(function (result) {

    console.log(result); // 1

    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), result * 2 * 1500);
    });

}).then(function (result) { // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), result * 2 * 1500);
    });

}).then(function (result) {

    console.log(result); // 4

});

// Not a promise chain 
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(5), 1000);
});

promise.then(function (result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function (result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function (result) {
    console.log(result); // 1
    return result * 2;
});


fetch('https://javascript.info/article/promise-chaining/user.json')
    // .then below runs when the remote server responds
    .then((response) => {
        // response.text() returns a new promise that resolves with the full response text
        // when it loads
        return response.json();
    })
    .then((user) => {
        // ...and here's the content of the remote file
        console.log(user); // {"name": "iliakan", "isAdmin": true}
    });