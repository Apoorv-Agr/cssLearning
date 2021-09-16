const printSS = (str = "", ans = "") => {
    if (str.length === 0) {
        if (ans)
            console.log(ans);
        return;
    }
    const fChar = str.charAt(0);
    const rOfS = str.substring(1);
    // Yes Call 
    printSS(rOfS, `${ans}${fChar}`);
    // No Call 
    printSS(rOfS, `${ans}`);
}

printSS("abc")