let arr = [3, 4, 5, 3, 7];
/* let arr = [1, 2, 3, 4]; */
// let arr = [1, 3, 1, 2];
let arrCpy = [...arr];
let count = -1;
if (isAestheticFn(arrCpy)) {
    count = 0;
} else {
    for (let i = 0; i < arr.length; i++) {
        let isAesthetic = true;
        arr.splice(i, 1);
        isAesthetic = isAestheticFn(arr);
        arr = [...arrCpy];
        if (isAesthetic) {
            count++;
        }
    }
}

console.log("count : ", count)


function isAestheticFn(arr,count) {
    let isAesthetic = true;
    let nextComp = '';
    for (let startIdx = 0, nextId = 1; nextId < arr.length; startIdx++, nextId++) {
        if (startIdx === 0) {
            if (arr[startIdx] > arr[nextId]) {
                nextComp = 's';
            } else if (arr[startIdx] < arr[nextId]) {
                nextComp = 't';
            }
        } else {
            if (arr[startIdx] > arr[nextId] && nextComp === 't') {
                nextComp = 's';
                isAesthetic = true;
            } else if (arr[startIdx] < arr[nextId] && nextComp === 's') {

                nextComp = 't';
                isAesthetic = true;
            } else {
                isAesthetic = false;
                break;
            }
        }
    }
    return isAesthetic;
}

// arr = [2, 9]
//  