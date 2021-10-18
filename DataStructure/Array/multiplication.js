const addInAnyBase = (num1, num2, base) => {
    num1 = Number(num1);
    num2 = Number(num2);
    base = Number(base);
    let rv = 0, carry = 0, power = 1;
    while (num1 > 0 || num2 > 0 || carry > 0) {
        let lastDigit1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
        let lastDigit2 = num2 % 10;
        num2 = Math.floor(num2 / 10);

        let sumOfLastDigits = lastDigit1 + lastDigit2 + carry;
        carry = Math.floor(sumOfLastDigits / base);
        sumOfLastDigits = sumOfLastDigits % base;
        rv = rv + (sumOfLastDigits * power);
        power *= 10;
    }
    return rv;
}

/* console.log("236 + 754 on base8 = ", addInAnyBase('236', '754', 8));
console.log("346 + 777 on base8 = ", addInAnyBase('346', '777', 8));
console.log("234 + 343 on base5 = ", addInAnyBase('234', '343', 5));
console.log("236 + 754 on base5 = ", addInAnyBase('236', '754', 5)); */

const getSingleDigitProduct = (num1, num2, base) => {
    num1 = Number(num1);
    num2 = Number(num2);
    base = Number(base);
    let rv = 0, power = 1, carry = 0;
    while (num1 > 0 || carry > 0) {
        let lastDigit1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
        let productResp = (lastDigit1 * num2) + carry;
        carry = Math.floor(productResp / base);
        productResp = productResp % base;
        rv = rv + (productResp) * power;
        power *= 10;
    }

    return rv;

}

const multiPlayInAnyBase = (num1, num2, base) => {
    num1 = Number(num1);
    num2 = Number(num2);
    base = Number(base);
    let rv = 0, power = 1;
    while (num2 > 0) {
        let lastD = num2 % 10;
        num2 = Math.floor(num2 / 10);
        let singleDigitProductResp = getSingleDigitProduct(num1, lastD, base);
        rv = addInAnyBase((singleDigitProductResp * power), rv, base);
        power *= 10;
    }
    return rv;
}

console.log("2156 * 74 in base 8 = ", multiPlayInAnyBase(2156, 74, 8)); // 204710

console.log("234 * 76 in base 8 = ", multiPlayInAnyBase(234, 76, 8)); // 22710

console.log('17 * 17 in base 10 = ', multiPlayInAnyBase(17, 17, 10)) // 289

console.log('17 * 17 in base 8 = ', multiPlayInAnyBase(17, 17, 8)) // 341