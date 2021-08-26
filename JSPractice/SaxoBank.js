/* let myPromise = Promise.resolve(20).then((val) => {
    return val + 100;
}).then((val) => {
    if (val < 100) {
        return val;
    } else {
        throw 'Value greater than 100';
    }
}).catch((e) => {
    return e;
})


myPromise.then((resp) => {
    console.log("in then resp : ", resp);
}).catch((err) => {
    console.log("in catch", err);
}) */

var a = 2;

function outer() {
    var a = 3;
    function inner() {
        console.log(a);
    }
    return function () {
        inner();
        var a = 4;
        
    }
}

let fn = outer();   
fn();