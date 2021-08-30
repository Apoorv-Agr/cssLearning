/* Here aVar is not in global scope, instead JS engine has a separate memory for this known as script  
*/
let aVar = 12;

let xVar = 100;

var yVar = 10;

{
    /* Uncaught SyntaxError: Identifier 'xVar' has already been declared. Reason as var is hoisted in global scope and xVar is already initialized with let, hence the error 
    */
    // var xVar = 10; 
    /*  Shadow of global Scope variable yVar, However when JS runs this line of code value of global scope variable yVar is updated as variables declared with var keyword are hoisted globally 
    */
    var yVar = 100; 
    /* aVar is block Scoped, However this is completely fine as aVar is under block scope */
    let aVar = 13;
    console.log("aVar : ", aVar);
}
console.log("aVar : ", aVar); // 12
console.log("yVar : ",yVar) // Output is 100
/* console.log("this.a : ", this.a);
// console.log("a : ", a);
console.log("this.aVar : ", this.aVar); */