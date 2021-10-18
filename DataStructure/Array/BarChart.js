const printBarChart = (inputArr = [], n) => {

    let max = inputArr[0];
    for (let y = 1; y < inputArr.length; y++) {
        if (inputArr[y] > max) {
            max = inputArr[y];
        }
    }

    let barPattern = "";
    for (let floor = max; floor >= 1; floor--) {
        for (let y = 0; y < inputArr.length; y++) {
            if (inputArr[y] >= floor) {
                barPattern += `* \t`;
            } else {
                barPattern += `\t`;
            }
        }
        barPattern += `\n`;
    }

    console.log(barPattern)
}
// const inputArr = [3, 1, 0, 7, 5];
const inputArr = [6, 4, 2, 7, 5, 2];
printBarChart(inputArr, inputArr.length);