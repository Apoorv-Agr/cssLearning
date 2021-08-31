/*
    Definition of Closure :- A function bind/bundled together with it's lexical environment/scope is a closure 
    Uses of Closure :- 
        1) Module Design Pattern 
        2) Currying
        3) Function like once
        4) memoize
        5) maintaining the state in async world
        6) setTimeouts 
        7) Iterators ... etc
 */

function abc() {
    let aVar = 10;
    function abcInner() {
        console.log("aVar : ", aVar);
    }
    aVar = 100;
    return abcInner; // Here JS is not just returning only the function abcInner(), plus also the reference to lexical scope
}

const abcVal = abc();  // abcVal still remembers reference to aVar
abcVal(); // this o/p :- 100 because during closure reference to variable aVar was returned

function pqr() {
    let bVar = 800;
    function xyz() {
        let aVar = 10;
        function abcInner() {
            console.log("aVar : ", aVar, " ,bVar : ", bVar);
        }
        aVar = 100;
        return abcInner; // Here JS is not just returning only the function abcInner(), plus also the reference to lexical scope
    }
    return xyz;
}
const outerMost = pqr();

console.log("outerMost : ", outerMost)
const innerLev1 = outerMost();
innerLev1();
