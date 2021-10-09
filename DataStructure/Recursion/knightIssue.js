const visitedArr = [];
for (let i = 0; i < 4; i++) {
    visitedArr[i] = [];
    for (let y = 0; y < 3; y++) {
        visitedArr[i][y] = 0;
    }
}
console.log("visitedArr : ", visitedArr)
const X = [2, 1, -1, -2, -2, -1, 1, 2];
const Y = [1, 2, 2, 1, -1, -2, -2, -1];
let ans = false;
function abc(stx, sty, edx, edy, n, visitedArr) {
    if (stx < 0 || stx >= n || sty < 0 || sty >= n || visitedArr[stx][sty] === 1) {
        return false;
    }
    visitedArr[stx][sty] = 1;
    if (stx === edx && sty === edy) {
        return true;
    }
    for (let i = 0; i < 8; i++) {
        let nx = stx + X[i];
        let ny = stx + Y[i];
        let myRes = abc(nx, ny, edx, edy, n, visitedArr);
        if (myRes === true) {
            return myRes;
        }
    }
    visitedArr[stx][sty] = 0;
    return false;
}