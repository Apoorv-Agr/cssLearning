// const arr = [22, 33, 27, 9, 12, 16, 44];
// const arr = [];

const maxOfArr = (arr = [], idx) => {
    if (arr.length === 0) {
        return -1;
    }
    if (idx === arr.length - 1) {
        return arr[idx];
    }
    let maxOfSubArr = maxOfArr(arr, idx + 1);
    if (maxOfSubArr > arr[idx]) {
        return maxOfSubArr;
    } else {
        return arr[idx];
    }
}
console.log(maxOfArr([22, 22, 22], 0));


const minOfArr = (arr = [], idx) => {
    if (arr.length === 0) {
        return -1;
    }
    if (idx === arr.length - 1) {
        return arr[idx];
    }
    let minOfSubArr = minOfArr(arr, idx + 1);
    if (minOfSubArr < arr[idx]) {
        return minOfSubArr;
    } else {
        return arr[idx];
    }
}

console.log(minOfArr([22, 17, -1, 17, 12, 2, 6, 4], 0));