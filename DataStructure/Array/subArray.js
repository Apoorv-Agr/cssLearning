/* const subArrGeneratorFn = (arr = []) => {
    const subArr = [];
    for (let i = 0; i < arr.length; i++) {
        let elToInsert = arr[i];
        subArr.push(elToInsert);
        for (let y = i + 1; y < arr.length; y++) {
            elToInsert += arr[y];
            subArr.push(elToInsert);
        }

        elToInsert = '';
    }
    return subArr;
} */

const subArrGeneratorFn = (arr = []) => {
    let elToInsert = '';
    for (let i = 0; i < arr.length; i++) {
        for (let y = i; y < arr.length; y++) {
            for (let k = i; k <= y; k++) {
                elToInsert += `${arr[k]} `;
            }
            elToInsert += `\n`;
        }
    }
    return elToInsert;
}

/* const arr = ['a', 'b', 'c']; */
const arr = ['a', 'b', 'c', 'd'];
console.log(subArrGeneratorFn(arr))