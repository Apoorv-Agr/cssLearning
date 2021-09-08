const str = "abc";


const getSubsequences = (str = "") => {
    if (str.length === 0) {
        return [];
    }
    const firstChar = str.charAt(0);
    const subStr = str.substring(1);
    const myArray = getSubsequences(subStr);
    const finalArr = [];
    finalArr.push(`${firstChar}`);
    for (let i = 0; i < myArray.length; i++) {
        finalArr.push(`${firstChar}${myArray[i]}`);
    }
    for (let i = 0; i < myArray.length; i++) {
        finalArr.push(`${""}${myArray[i]}`);
    }

    return finalArr;
}
// OutPut Should be :- Output : a, b, c, ab, bc, ac, abc
console.log("getSubsequences : ", getSubsequences("abc").toString());