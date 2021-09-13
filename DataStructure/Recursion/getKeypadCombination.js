const keyPadMapping = {
    0: "",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}
// 54
const getAllCombinationOfWords = (typedStr = "") => {
    // Base Condition
    typedStr = typedStr.toString();
    if (typedStr.length === 0) {
        return [""];
    }

    const firstDigit = typedStr.charAt(0);
    const subStr = typedStr.substring(1);
    const getCodeOfFirstDigit = keyPadMapping[firstDigit];
    const subStr2 = getAllCombinationOfWords(subStr);
    const myRespArr = [];
    for (let i = 0; i < getCodeOfFirstDigit.length; i++) {
        const fChar = getCodeOfFirstDigit.charAt(i);
        for (let y = 0; y < subStr2.length; y++) {
            myRespArr.push(`${fChar}${subStr2[y]}`);
        }
    }
    return myRespArr;
}

console.log("getAllCombinationOfWords : ", getAllCombinationOfWords("234"));