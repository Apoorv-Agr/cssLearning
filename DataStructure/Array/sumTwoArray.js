const sumOfTwoArr = (array1 = [], array2 = []) => {
    let n = array1.length > array2.length ? array1.length : array2.length;

    const sumArr = new Array(n);
    let i = array1.length - 1;
    let j = array2.length - 1;
    let k = sumArr.length - 1;
    let carry = 0;
    while (k >= 0) {
        let digit = carry;
        if (i >= 0) {
            digit += array1[i];
        }
        if (j >= 0) {
            digit += array2[j];
        }
        carry = Math.floor(digit / 10);
        digit = digit % 10;
        sumArr[k] = (digit);
        i--;
        j--;
        k--;
    }

    let myAns = '';
    if (carry != 0) {
        myAns += `${carry} `;
    }
    for (let x = 0; x < sumArr.length; x++) {
        myAns += `${sumArr[x]} `;
    }
    console.log(myAns);
}
/* const arr1 = [9, 3, 4, 6, 8];
const arr2 = [1, 9, 8, 8]; */

const arr1 = [9, 9, 9];
const arr2 = [1];

sumOfTwoArr(arr1, arr2);