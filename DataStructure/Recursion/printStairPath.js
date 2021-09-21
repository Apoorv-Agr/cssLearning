
const printStairsPath = (n, path = "") => {
    if (n < 0) {
        return;
    }
    if (n === 0) {
        console.log(path);
    }
    for (let i = 1; i <= 3; i++) {
        printStairsPath(n - i, `${path}${i}`);
    }
}

printStairsPath(3, "");