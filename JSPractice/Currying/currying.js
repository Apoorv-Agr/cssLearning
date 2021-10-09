console.log("In currying");

function multiply(x, y) {
    console.log(x * y);
}

const multiplyBy2 = multiply.bind(this, 2);

multiplyBy2(4);
multiplyBy2(8);

const multiplyBy5 = multiply.bind(this, 5);

multiplyBy5(3);

multiplyBy5(6);

function multiplyClosure(x) {
    return function (y) {
        console.log(x * y);
    }
}

const multiplyBy11 = multiplyClosure(11);

multiplyBy11(2);