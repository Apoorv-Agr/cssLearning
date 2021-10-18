/* 
function binary_to_decimal(str) {
    //code here
    let givenNum = Number(str);
    let retVal = 0;
    let power = 1;
    while (givenNum > 0) {
        let lastDig = givenNum % 10;
        givenNum = Math.floor(givenNum / 10);
        retVal += lastDig * power;
        power = power * 2;

    }
    return retVal;
}

// console.log(binary_to_decimal('110011'));

// Function for Any Base to Decimal

function anyBase_to_decimal(str, base) {
    let givenNum = Number(str);
    let retVal = 0;
    let power = 1;
    while (givenNum > 0) {
        let lastDigit = givenNum % 10;
        givenNum = Math.floor(givenNum / 10);
        retVal += lastDigit * power;
        power = power * base;

    }
    return retVal;
}

// console.log(anyBase_to_decimal('1172', 8));

// Function for Decimal to Any Base
function decimal_to_anyBase(str, base2) {
    let givenNum = Number(str);
    let retVal = 0;
    let power = 1;
    while (givenNum > 0) {
        let lastDigit = givenNum % base2;
        givenNum = Math.floor(givenNum / base2);
        retVal += lastDigit * power;
        power = power * 10;
    }
    return retVal;
}

function anyBase_to_anyBase(str, base1, base2) {
    let retVal = 0;
    let decimalVal = anyBase_to_decimal(str, base1);
    retVal = decimal_to_anyBase(decimalVal, base2);
    return retVal;
}

console.log(anyBase_to_anyBase('172', 8, 2)); 
*/
// addition in any base function 
// try this again
/* function addition_in_any_base(str1, str2, base1) {
    let num1 = Number(str1);
    let num2 = Number(str2);
    let carry = 0;
    let sum = 0;
    let power = 1;
    while (num1 > 0 || num2 > 0 || carry > 0) {
        let lastDigit1 = num1 % 10;
        let lastDigit2 = num2 % 10;
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        let lastDigitsSum = lastDigit1 + lastDigit2 + carry;
        carry = Math.floor(lastDigitsSum / base1);
        lastDigitsSum = lastDigitsSum % base1;

        sum += lastDigitsSum * power;
        power *= 10;

    }
    return sum;
}
console.log("236 + 754 on base8 = ", addition_in_any_base('236', '754', 8));
console.log("346 + 777 on base8 = ", addition_in_any_base('346', '777', 8));
console.log("234 + 343 on base5 = ", addition_in_any_base('234', '343', 5)); */

/* function sum_in_any_base(str1, str2, base1) {
    let num1 = Number(str1);
    let num2 = Number(str2);
    base1 = Number(base1);
    let carry = 0, power = 1, sum = 0;
    while (num1 > 0 || num2 > 0 || carry > 0) {
        let lastDigitOfNum1 = num1 % 10;
        let lastDigitOfNum2 = num2 % 10;
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        let sumOfLastDigits = lastDigitOfNum1 + lastDigitOfNum2 + carry;
        carry = Math.floor(sumOfLastDigits / base1);
        sumOfLastDigits = sumOfLastDigits % base1;
        sum += sumOfLastDigits * power;
        power = power * 10;
    }
    return sum;
}

console.log("236 + 754 on base8 = ", sum_in_any_base('236', '754', 8));
console.log("346 + 777 on base8 = ", sum_in_any_base('346', '777', 8));
console.log("234 + 343 on base5 = ", sum_in_any_base('234', '343', 5));
console.log("236 + 754 on base5 = ", sum_in_any_base('236', '754', 5)); */

function subtract_in_any_base(str1, str2, base1) {
    let num1 = Number(str1), num2 = Number(str2), carry = 0, ans = 0, power = 1;
    while (num1 > 0) {
        let lastDigit1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
        let lastDigit2 = num2 % 10;
        num2 = Math.floor(num2 / 10);
        lastDigit1 = lastDigit1 + carry;
        let subtractRes = 0;
        if (lastDigit2 > lastDigit1) {
            subtractRes = (lastDigit1 + base1) - lastDigit2;
            carry = -1;
        } else {
            subtractRes = lastDigit1 - lastDigit2;
            carry = 0;
        }
        ans += subtractRes * power;
        power *= 10;
    }
    return ans;
}

console.log('1212 - 256 to base8 =  ', subtract_in_any_base('1212', '256', 8))

console.log('202 - 21 to base8 =  ', subtract_in_any_base('202', '21', 7));
