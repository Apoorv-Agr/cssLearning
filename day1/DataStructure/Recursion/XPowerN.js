const powerFn = (x, n) => {
    if (n == 0) {
        return 1;
    }
    let xNm1 = powerFn(x, n - 1);
    let res = x * xNm1;
    return res;
}

console.log(powerFn(3, 5));