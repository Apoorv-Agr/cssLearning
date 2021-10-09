console.log('here')

const users = [
    { firstName: "Ap", lastName: "Ag", age: 31 },
    { firstName: "Jh", lastName: "Ce", age: 50 },
    { firstName: "Ra", lastName: "Wi", age: 38 },
    { firstName: "To", lastName: "Cr", age: 50 },
    { firstName: "Be", lastName: "Re", age: 31 }
];

const ageGreaterThan30 = users.filter((el) => el.age > 30);

console.log(ageGreaterThan30);

/* get age frequency object :- e.g { "31":2,"50":2,"38":1 } */


const ageFreqArr = users.reduce((acc, el) => {
    const { age } = el;
    if (acc[age]) {
        acc[age]++;
    } else {
        acc[age] = 1;
    }
    return acc;
}, {});

console.log("ageFreqArr :", ageFreqArr);