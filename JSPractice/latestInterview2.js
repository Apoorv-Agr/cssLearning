function abc(param1) {
    let arr = [];
    function inner(param2) {
        console.log(arr);
        return param1 * param2;
    }
    return inner;
}

const outer = abc(4);

outer(6);
// 24


try {
    promise().then(() => {
    }).catch((err) => {

    })
} catch (er) {

}



console.log('one');
setTimeout(function () {
    console.log('two');
}, 0);
console.log('three');


function modifyArray(arr, callback) {
    arr.push(100); // [10, 2, 3, 14, 55,100]
    arr.pop(2); // [10, 2, 14, 55,100]
    arr.shift(3); // [10, 2, 14, 55, 100]
    callback();
}
var arr = [10, 2, 3, 14, 55];
modifyArray(arr, function () {
    console.log(arr);
});


const [counter, setCounter] = useState(0);

usEffect(() => {
    // 
}, [])

usEffect(() => {
    // 
}, [counter])

usEffect(() => {
    // 
})

var arr = [[1, 2], [3, 4], [4, 5]];  // [1,2,3,4,5]

var flatArr = [];


arr.map((el) => {
    el.map(innerEl => {
        flatArr.push(innerEl)
    })
});

flatArr = new Set([...flatArr]);





