
//  Get All paths of stairs, allowed steps are [1,2,3]
const getStairsPath = (numOfStairs) => {
    if (numOfStairs === 0) {
        return [""];
    }
    if (numOfStairs < 0) {
        return [];
    }
    const getPaths1 = getStairsPath(numOfStairs - 1);
    const getPaths2 = getStairsPath(numOfStairs - 2);
    const getPaths3 = getStairsPath(numOfStairs - 3);

    const paths = [];

    for (let i = 0; i < getPaths1.length; i++) {
        paths.push(`${1}${getPaths1[i]}`);
    }
    for (let i = 0; i < getPaths2.length; i++) {
        paths.push(`${2}${getPaths2[i]}`);
    }
    for (let i = 0; i < getPaths3.length; i++) {
        paths.push(`${3}${getPaths3[i]}`);
    }
    return paths;
}

console.log("getStairsPath : ", getStairsPath(4));