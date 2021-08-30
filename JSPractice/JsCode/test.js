class A {
    constructor() {
        console.log("Object Made");
        this.x = 10;
    }
}

function abc() {
    const objA = new A();
    return objA;
}

const retVal = abc();
console.log("retVal : ", retVal.x)


function xyz() {
    let x = 2, y = 3;
    function inner() {
        console.log(x);
    }
    return inner;
}
const abc = xyz(); // 
abc();
