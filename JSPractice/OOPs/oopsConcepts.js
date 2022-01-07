console.log('Here')
/* import { memo } from 'react';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'; */

// Factory Functions

function createCircle(radius) {
    return {
        radius,
        getRadius: function () {
            return (22 / 7) * this.radius * this.radius;
        }
    }
}

const circle1 = createCircle(7);

console.log(circle1);
console.log((circle1.getRadius()));

// Function Constructor
function Circle(radius) {
    this.radius = radius;
    this.getRadiusFn = function () {
        return (22 / 7) * this.radius * this.radius;
    }
}

const circle2 = new Circle(14);

console.log(circle2);
console.log((circle2.getRadiusFn()));




/* function outer(param1) {
    const str = "Hello";
    function inner(innerParams) {
        console.log(str);
    }
    return inner;
}

const outer1 = outer('abc');

outer1();


const pr1 = new Promise((resolve, reject) => {
    resolve('Success');
}) */


/* useEffect(()=>{

})

useEffect(()=>{
    
},[])

useEffect(()=>{
    
},[count]) */


// memo()


/* console.log(abc); // undefined

x();

var abc = "abc";

function x() {

} */

// if(x??)











/* function outer(param1) {
    let x = "Hello";
    function inner(param2) {
        console.log(x);
    }
    x = "Hello, Apoorv";
    return inner;
}

outer("a")("b")

if (!Array.prototype.filter) {
    Array.prototype.filter = function (fn) {
        const arr;
        for (let i = 0; i < this.length; i++) {
            if (fn(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    }
} */

/* console.log('zy : ',zy); // 
let zy = "Apoorv";


const handleClick = useCallback(()=>{
    for(let i=0; i<10000000; i++){

    }
    setCount(count++);
},[count]);

<Title>This Title</Title>
<Button></Button> */


/* const arr1 = [1, 2, 3, 8, 1, 2, 8];
const obj = {};
let unique;
for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]]) {
        obj[arr1[i]]++;
    } else {
        obj[arr1[i]] = 1;
    }
};


for (key in obj) {
    if (obj[key] === 1) {
        unique = key;
    }
} */









/* class Student {
    name = '';
    email = '';
    address = {
        city: '',
        state: '',
    };
}


const sudent1 = new Student();
sudent1.address.city = "ABC";

const sudent2 = new Student();
sudent2.address.city = "PQR";


let isSameObj = false;
function isEqualVal(obj1, obj2) {

    for (let key in obj1) {
        if (key in obj2) {
            if ((obj1[key] !== null && typeof obj1[key] === 'object') && (obj2[key] !== null && typeof obj2[key] === 'object')) {
                isEqualVal(obj1[key], obj2[key]);
            } else if (obj2[key] === obj1[key]) {
                isSameObj = true;
            } else {

            }
        }
    }
}



const obj1 = { ...obj2 };

const abc = JSON.parse(JSON.stringify(obj1));





console.log("a");
setTimeout(() => {
    console.log("b");
}, 0);



console.log("c");

for (let i = 0; i < 20000000; i++) {

}
//a
//c
//b


function inner1(num) {
    var x = 10, y = 30;
    function inner2(num1) {
        console.log(num * num1);
    }
    x = 100;
    inner2();
}

const multiplyBy5 = inner1(5);


sum(2)(3)(1)();

function sum(num) {
    return function (b) {
        if (b) {
            return sum(num + b);
        } else {
            return num;
        }
    }
}


let arr = [1, 2, 3, [4, 5]];


Array.prototype.flatArr = function () {
    let straightArr = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            straightArr = [...straightArr, ...this[i]];
        } else {
            straightArr = [...straightArr, this[i]];
        }
    }
    return straightArr;
}; */


// const

// action 

//  function incrementOne(){
//     return {
// type : 'incrementOne',
// payload : {}
//     }
// }


// export {incrementOne}

/*
const initialState = {};
    const reducerOne = (state=initialState, action)=>{
        switch(action.type){
            case 'incrementOne' : 
                return {...state, count:count+1};
            default : 
                state:
        }
    }
*/


/* 


mapDispacthcProps = (dispathc)=>{
    increaseByOne : return ( ()=>{
        incrementOne({})
    } );
}

mapStateToProps = (appState){
    count : appState.count
}


export connect()()

applyMiddleWare()

*/









/* function outer(a) {
    var x = 10;
    function inner(b) {
        return a + x + b;
    }
    return inner;
}


const outerFn = outer(10);
outerFn(20);
//40



{
    let s = "ertwert";
    s = "lorem";
    const PI = 3.14;
}


console.log(x); // undefined

var x = "100";

function fn() {
    return 2 + 2;
}
console.log(s);
let s;


const arrr = [];
// arrr = [1,3];
arrr.push(2);

const obj = { a: 100, name: "Apoorv", c: { key1: "lorem" } };
// obj = {a:100};
// obj.a = 100;

const { d = null } = obj;

const fn1 = () => 1;
// this ->

// this.onClick = this.onClick.bind(this);

const arr1 = [1, 2, 2, 1, 5, 5, 7, 8];

function getUnique(arr = []) {
    const uniqueArr = arr.reduce((acc, el, idx) => {
        if (acc.indexOf(el) === -1) {
            acc.push(el);
        }
        return acc;
    }, []);
    return uniqueArr;
}

useEffect(() => { 

}, [count,count1])

useEffect(() => { 

}, [])


A -> B -> C-> D-> E
useRef

const inputRef = useRef(); 


<input ref={inputRef}/>

const mainStyle = ``


<mainStyle>
    <
</mainStyle>

function async z(){
    const resp1  = await new Promise((resolve,reject)=>{
        resolve(100);
    })
    console.log(resp1);
} */


function StopWatch() {
    this.duration = 0;
    let startVar = 0;
    let isStartCalled = false;
    let isStopCalled = false;
    this.reset = function () {
        this.duration = 0;
        startVar = 0;
        isStartCalled = false;
        isStopCalled = false;
    }
    this.start = function () {
        if (isStartCalled) {
            throw "Stop Watch has already Started";
        }
        isStartCalled = true;
        isStopCalled = false;
        startVar = Date.now();
    }
    this.stop = function () {
        if (isStopCalled) {
            throw "Stop Watch has already Stopped";
        }
        isStartCalled = false;
        isStopCalled = true;
        this.duration = (Date.now() - startVar) / 1000;
    }
}




// getter and  setter

function Person() {
    let duration = 75;

    Object.defineProperty(this, 'durationName', {
        get: function () {
            return duration;
        }
    })
}

const p1 = new Person();


var movieTicket = {
    movie: 'Mad Max',
    hall: 1
};

Object.defineProperty(movieTicket, 'movie', {
    value: 'Mad Max',
    writable: false
});
Object.defineProperties

movieTicket.movie = 'Star Wars';

console.log(movieTicket);


















