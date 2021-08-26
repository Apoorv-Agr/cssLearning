const mainFunc = (n) => {
    const ans = getFactorial(n);
    console.log(`${n} factorial is : ${ans}`);
}


const getFactorial = (n) => {
    if (n == 0 || n == 1) { return 1;}
    let fNum1 = getFactorial(n - 1);
    let fNum2 = n * fNum1;
    return fNum2;
}

mainFunc(4);
mainFunc(5);
mainFunc(6);