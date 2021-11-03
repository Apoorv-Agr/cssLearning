const inverseArr = (arr = []) => {
    const myNewArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        myNewArr[arr[i]] = i;
    }
    return myNewArr;
}
const arr = [3, 4, 1, 2, 0];

console.log(inverseArr(arr));