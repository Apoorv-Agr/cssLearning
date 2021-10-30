const array = [1, 2, 3, 4];

/* for (var i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log("I am at index : ", i)
    }, 3000)
}; */

// Way one of solving 

/* for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log("I am at index : ", i)
    }, 3000)
}; */

// second way of solving this

for (var i = 0; i < array.length; i++) {
    ((i) => {
        setTimeout(() => {
            console.log("I am at index : ", i)
        }, 3000)
    })(i)
};