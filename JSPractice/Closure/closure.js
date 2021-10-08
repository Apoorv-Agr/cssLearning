console.log("in closure");

/* 
    What is closure :- A function bind/bundled together with it's lexical environment
    Lexical Meaning :- Where exactly the function is physically present in the code. 
    So Closure means that the function will have access to it own memory + it's parent memory reference
 */

function outerFn() {
    let a = 20;
    function innerFn() {
        console.log('value of a in inner a : ', a);
    }
    a = 100;
    return innerFn;
}

const outerFnResp = outerFn();

console.log("outerFnResp : ", outerFnResp);

outerFnResp();


function timer() {
    for (var i = 1; i <= 5; i++) {
        {
            ((x) => {
                setTimeout(() => {
                    console.log(x)
                }, x * 1000)
            })(i);
        }
    }
}

timer();