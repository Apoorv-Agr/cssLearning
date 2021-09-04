const arr = [2, 3, 6, 9, 8, 3, 2, 6, 2, 4];

// Optimized solution 

const findFirstIdx = (arrTemp, idx, searchEl) => {
    if (arrTemp.length === 0) { return -1 };
    if (idx === arrTemp.length) { return -1 };
    if (arrTemp[idx] === searchEl) {
        return idx;
    } else {
        let idxInSubArr = findFirstIdx(arrTemp, idx + 1, searchEl);
        return idxInSubArr;
    }
}

// console.log(findFirstIdx(arr, 0, 6));

// What I thought, not a good way 

const findFirstIdxCpy = (arrTemp, idx, searchEl) => {
    if (arrTemp.length === 0) { return -1 };
    if (idx === arrTemp.length) { return -1 };
    let idxInSubArr = findFirstIdx(arrTemp, idx + 1, searchEl);
    if (arrTemp[idxInSubArr] === arrTemp[idx]) {
        return idx;
    } else {
        return idxInSubArr;
    }
}

console.log(findFirstIdxCpy(arr, 0, 3));
