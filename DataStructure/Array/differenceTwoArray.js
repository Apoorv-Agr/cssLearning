const diffOfTwoArr = (array1 = [], array2 = []) => {

    const diffArr = new Array(array2.length);
    let i = array1.length - 1;
    let j = array2.length - 1;
    let k = diffArr.length - 1;
    let carry = 0;
    while (k >= 0) {
        let digit = 0;
        let array1Val = i >= 0 ? array1[i] : 0;
        if (array2[j] + carry >= array1Val) {
            digit = (array2[j] + carry) - array1Val;
        } else {
            digit = (array2[j] + carry + 10) - array1Val;
            carry = -1;
        }
        diffArr[k] = digit;
        i--;
        j--;
        k--;
    }
    let myAns = '';
    let idx = 0;
    while (idx < diffArr.length) {
        if (diffArr[idx] === 0) {
            idx++;
        } else {
            break;
        }
    }
    while (idx < diffArr.length) {
        myAns += `${diffArr[idx]} `;
        idx++;
    }
    console.log(myAns);
}
/* const arr1 = [9, 3, 4, 6, 8];
const arr2 = [1, 9, 8, 8]; */

const arr1 = [1, 1];
const arr2 = [1, 0, 0, 0];

diffOfTwoArr(arr1, arr2);