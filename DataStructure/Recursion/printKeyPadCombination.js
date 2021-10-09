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


const printKeyPadCombination = (str = "", ans = "") => {
    if (str.length === 0) {
        console.log(ans);
        return;
    }
    const fChar = str.charAt(0);
    const restOfStr = str.substr(1);
    const codeForFirstChar = keyPadMapping[fChar];
    for (let i = 0; i < codeForFirstChar.length; i++) {
        let fCharOptions = codeForFirstChar[i];
        printKeyPadCombination(restOfStr, `${ans}${fCharOptions}`);
    }
    return;
}

printKeyPadCombination("234");

/* 
adg
adh
adi
aeg
aeh
aei
afg
afh
afi
bdg
bdh
bdi
beg
beh
bei
bfg
bfh
bfi
cdg
cdh
cdi
ceg
ceh
cei
cfg
cfh
cfi */