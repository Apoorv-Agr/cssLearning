const mainFunction = () => {
    let n = 6;
    /* printDecreasing(n);
    printIncreasing(n); */
    printBothIncreasingDec(n);
}

/* const printDecreasing = (n) => {
    if (n == 0) {
        return;
    }
    console.log(n);
    printDecreasing(n - 1);
}


const printIncreasing = (n) => {
    if (n == 0) {
        return;
    }
    printDecreasing(n - 1);
    console.log(n);
   
} */

const printBothIncreasingDec = (n) => {
    if (n == 0) {
        return;
    }
    console.log(n);
    printBothIncreasingDec(n - 1);
    console.log(n);
}

mainFunction();