/*
abc has 3! (6 permutations of strings)
    1) abc
    2) acb
    3) bac
    4) bca
    5) cab
    6) cba
 */

/* let str = "abc";
// console.log("strCpy : ", strCpy.slice(1, 2, 3));
for (let i = 0; i < str.length; i++) {
    const charAtIPos = str.charAt(i);
    console.log("charAtIPos : ", charAtIPos);
    const restOfStr = str.substr(0, i) + str.substr(i + 1);
    console.log("restOfStr  : ", restOfStr)
} */

const printPermutationOfString = (str, ans) => {
    if (str.length === 0) {
        console.log(ans);
        return;
    }
    for (let i = 0; i < str.length; i++) {
        const charAtIPos = str.charAt(i);
        const restOfStr = str.substr(0, i) + str.substr(i + 1);
        printPermutationOfString(restOfStr, `${ans}${charAtIPos}`);
    }
}

printPermutationOfString("abc", "");