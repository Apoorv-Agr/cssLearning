const myArr = [2, 3, 6, 9, 8, 3, 2, 3, 6, 4];

const allOccurrenceFn = (arr = [], idx, search, occCount) => {
    if (arr.length === 0) { return []; }
    if (idx === arr.length) { return new Array(occCount); }
    if (search === arr[idx]) {
        let newArr = allOccurrenceFn(arr, idx + 1, search, occCount + 1);
        newArr[occCount] = idx;
        return newArr;
    } else {
        let newArr = allOccurrenceFn(arr, idx + 1, search, occCount);
        return newArr;
    }
}

console.log('allOccurrenceFn : ', allOccurrenceFn(myArr, 0, 3, 0));