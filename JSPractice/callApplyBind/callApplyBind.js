const nameObj = {
    firstName: 'Apoorv',
    lastName: 'Agrawal',
}
const nameObj2 = {
    firstName: 'Thomas',
    lastName: 'Shelby',
}

const printFullName = function (city, state, country) {
    console.log(`${this.firstName} ${this.lastName} ${city} ${state} ${country}`);
}

// Call method :-  Pass arguments one by one
printFullName.call(nameObj, "using call() Varanasi", "Uttar Pradersh", "India");
// Call method :-  Pass arguments one by one
printFullName.call(nameObj2, "using call() Birmingham", " West Midlands county", "England"); // Pass arguments one by one

// Apply method :- Pass arguments using array
printFullName.apply(nameObj2, ["using apply() Birmingham", " West Midlands county", "England"]); // Pass arguments using array


/* bind method :- this returns a method, not directly invokes the function like call() and apply()*/

const printMyName = printFullName.bind(nameObj, "using bind() Varanasi", "Uttar Pradersh", "India");

console.log('printMyName : ', printMyName); 
/* 
ƒ (city, state, country) {
    console.log(`${this.firstName} ${this.lastName} ${city} ${state} ${country}`);
}
 */

printMyName();