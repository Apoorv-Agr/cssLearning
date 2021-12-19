function Person(name, age, gender = "") {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.getName = function () {
    return this.name;
}

/* Person.prototype.getDetails = function () {
    return `${this.name}, ${this.gender} is ${this.age}. yrs `;
}
 */
var p1 = new Person('Ram', 30);
console.log("p1 : ", p1);

/**
 * Imagine a world where new keyword does not exist.
 * 
 * const p2 = createInstance(Person, 'Ram', 20) 
 * Implement createInstance
 */


const p2 = createInstance(Person, 'Ram', 20);


console.log("p2 : ", p2);
console.log(p2.getName());

const p3 = createInstance(Person, 'Rohan', 22, 'M');


console.log("p3 : ", p3);
/* console.log(p3.getDetails()); */



function createInstance() {
    var argsCpy = [...arguments];
    var newObj = {};
    argsCpy.shift();
    const construct = arguments[0].bind(newObj);
    newObj.__proto__ = Object.create({}, construct.apply(newObj, [...argsCpy]));
    newObj.__proto__ = arguments[0].prototype;
    return newObj;
}