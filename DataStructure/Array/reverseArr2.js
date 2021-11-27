const reverseArrFn = (arr) => {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
const arr = [10, 20, 30, 40, 50, 60, 70];

reverseArrFn(arr);

console.log('arr after reversal : ', arr)