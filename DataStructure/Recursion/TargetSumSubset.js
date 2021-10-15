const getSubSet = (inputArr = [], target, outputStr = "", sumSoFar = 0, idx = 0) => {

    if (idx === inputArr.length) {
        if (sumSoFar === target) {
            console.log(outputStr);
        }
        return;
    }
    getSubSet(inputArr, target, `${outputStr} ${inputArr[idx]}`, sumSoFar + inputArr[idx], idx + 1);

    getSubSet(inputArr, target, `${outputStr}`, sumSoFar, idx + 1);

}

getSubSet([10, 20, 30, 40, 50, 60], 60, "", 0, 0)