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

console.log("236 + 754 on base8 = ", addInAnyBase('236', '754', 8));
console.log("346 + 777 on base8 = ", addInAnyBase('346', '777', 8));
console.log("234 + 343 on base5 = ", addInAnyBase('234', '343', 5));
console.log("236 + 754 on base5 = ", addInAnyBase('236', '754', 5));