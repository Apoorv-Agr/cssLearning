const reverseArr = (arr, startIdx, endIdx) => {
    let i = startIdx;
    let j = endIdx;
    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

const rotateArr = (arr = [], k) => {
    k = k % arr.length;
    if (k < 0) {
        k += arr.length;
    }
    reverseArr(arr, 0, (arr.length - k - 1));
    reverseArr(arr, (arr.length - k), (arr.length - 1));
    reverseArr(arr, 0, (arr.length - 1));
    return arr;
}


const myArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

console.log(rotateArr(myArr, -1));

/*
    18LPA
    2 LPA -> Stability Bonus 
    
*/