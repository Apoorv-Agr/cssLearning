const obj = {
    1: "a", 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: "r", 19: "s", 20: 't', 21: 'u', 22: 'v', 23: "w", 24: "x", 25: "y", 26: 'z'
}
/* 123 :-  aw, abc, lc
    993 :- iic
 */

// 920303
const printEncoding = (str = "", ans = "") => {
    if (str.length === 0) {
        console.log(ans);
        return;
    } else if (str.length === 1) {
        const char0 = str.charAt(0);
        if (char0 === '0') {
            return;
        } else {
            console.log(`${ans}${obj[char0]}`);
            return;
        }
    } else {
        const char0 = str.charAt(0);
        const req0 = str.substring(1);
        if (char0 === '0') {
            return;
        } else {
            printEncoding(req0, `${ans}${obj[char0]}`);
        }
        const char12 = str.substring(0, 2);
        const req12 = str.substring(2);
        if (Number(char12) <= 26) {
            printEncoding(req12, `${ans}${obj[char12]}`);
        }
    }
}

// printEncoding('123', "");

// printEncoding('920303', "");

// printEncoding('993', ""); // iic

// printEncoding('013', "");

printEncoding('103', "");