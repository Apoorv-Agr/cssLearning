const printSubSets = (arr = []) => {
    const limit = Math.pow(2, arr.length);
    for (let i = 0; i < limit; i++) {
        let opStr = '';
        let temp = i;
        for (let y = arr.length - 1; y >= 0; y--) {
            let r = temp % 2;
            temp = Math.floor(temp / 2);
            if (r === 0) {
                opStr = `-\t${opStr}`;
            } else {
                opStr = `${arr[y]}\t${opStr}`;
            }
        }
        console.log(opStr);
    }
}

const arr = [1, 2, 3];
printSubSets(arr);