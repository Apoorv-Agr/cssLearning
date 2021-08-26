const powerFn = (x, n) => {
    if (n == 0) {
        return 1;
    }
    let xPowerNBy2 = powerFn(x, Math.floor(n / 2));
    let xPowerN = xPowerNBy2 * xPowerNBy2;
    if (n % 2 === 1) {
        xPowerN = xPowerN * x;
    }
    return xPowerN;
}

console.log("powerFn : ", powerFn(2, 9));