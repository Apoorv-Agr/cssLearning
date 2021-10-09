const myArr = [2, 3, 6, 9, 8, 3, 2, 3, 6, 4];

const lastIdxFn = (arr = [], idx, search) => {
    if (arr.length === 0) { return -1; }
    if (arr.length === idx) { return -1; }
    let lastIdxInSArr = lastIdxFn(arr, idx + 1, search);
    if (lastIdxInSArr === -1) {
        if (arr[idx] === search) { return idx; } else { return -1; }
    } else {
        return lastIdxInSArr;
    }
};

console.log('last index : ', lastIdxFn(myArr, 0, 2));

const getFirstInxFn = (arr = [], idx, search) => {
    if (arr.length === 0) { return -1; }
    if (arr.length === idx) { return -1; }
    if (search === arr[idx]) {
        return idx;
    } else {
        let fIdx = getFirstInxFn(arr, idx + 1, search);
        return fIdx;
    }
}
console.log('First index : ', getFirstInxFn(myArr, 0, 3));