// un- Optimized way of doing code
const reverseArrFn = (arr = []) => {

    const myArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        myArr.push(arr[i]);
    }
    arr = myArr;
    return arr;
}

const swapFn = (a, b) => {
    let x = a;
    a = b;
    b = x;

}

const reverseArrFn2 = (arr = []) => {
    let i = 0, j = arr.length - 1;
    while (i <= j) {
        let a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
        i++;
        j--;

    }
    return arr;
}

const myArr = [10, 20, 30, 40, 50];

console.log(reverseArrFn2(myArr));