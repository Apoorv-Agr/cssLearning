console.log('higher Order Functions');

/* 
    Definition :- A function which takes another function as an argument or returns a function from it is known as Higher Order Function 
*/


const areaFormula = (radius) => {
    return Math.PI * radius * radius
}

const circumferenceFormula = (radius) => {
    return 2 * Math.PI * radius;
}

const diameterFormula = (radius) => {
    return 2 * radius;
}

const radiusArr = [1, 2, 3];

const getCircleInfo = (radiusArr = [], fn) => {
    let output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(fn(radiusArr[i]))
    }
    return output;
}

console.log('area : ', getCircleInfo(radiusArr, areaFormula));

console.log('Circumference : ', getCircleInfo(radiusArr, circumferenceFormula));

console.log('Diameter : ', getCircleInfo(radiusArr, diameterFormula));

/* Creating a polyfill  */
Array.prototype.calculateCircle = function (fn) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(fn(this[i]));
    }
    return output;
}

console.log('area using map: ', radiusArr.map(areaFormula));

console.log('area using polyfill created on our own: ', radiusArr.calculateCircle(areaFormula));



//  Less optimized way of writing code

/* const getAreaOfCircle = (radius = []) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const getCircumference = (radius = []) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

const getDiameter = (radius = []) => {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
} */