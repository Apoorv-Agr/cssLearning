/* 
    Difference b/w Function Statement and Function Expression is hoisting Function Statement are hoisted while Function Expression is not hoisted. Below is the expample of the same
*/
// abc(); // inside abc
// xyz(); // TypeError: xyz is not a function, Reason is when xyz is called it's value is stored as undefined (because of variable hoisting) in the Global Execution Context, hence call to undefined throws this error 

// Function Statement
function abc() {
    console.log(`inside abc`);
}

// Function Expression

var xyz = function () {
    console.log("in xyz");
}

// Function Deceleration AKA Function Statement
function pqr() {
    console.log(`inside pqr`);
}

/*  
    Anonymous Function :- A function without any name identifier 
        Anonymous Function is used when functions are used as values
*/

// O/P of below function is :-  Uncaught SyntaxError: Function statements require a function name
/* function() {

}  */



// Named Function Expression
/*  Gotcha of this is :- We can not call the function using rty() */
var qwe = function rty() {
    console.log("inside rty : ", rty); // We can access rty inside the function as it's scope is local
}
qwe(); /* 
            ƒ rty() {
                console.log("inside rty : " ,rty);
            } 
        */
// rty(); // Uncaught ReferenceError: rty is not defined, Reason in this case rty is not created in the Outer Scope (Global in this case), rather as Local Scope


// Diff b/w parameters and arguments
// Parameter is param1
function asd(param1) {

}
asd('Hello');
// arguments is 'Hello'

// First Class Functions AKA First Class Citizens

/* 
    Ability to use functions as value it is known as First Class Functions 
    E.g :- passing a function as an argument or returning a function 
*/

let dfg = function (params1) {
    console.log('params1 ', params1); // ƒ () {}
}
dfg(function () { }); // passing a function

// returning a function
let ghj = function () {
    return function () {

    }
}
console.log(ghj()) /* ƒ (){

} */

// Arrow Functions