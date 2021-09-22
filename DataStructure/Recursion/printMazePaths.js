const printMazePath = (sr, sc, dr, dc, ans = "") => {
    if (sr > dr || sc > dc) {
        return;
    }
    if (sc === dc && sr === dr) {
        console.log(ans);
        return;
    }
    printMazePath(sr + 1, sc, dr, dc, `${ans}v`);
    printMazePath(sr, sc + 1, dr, dc, `${ans}h`);
}

printMazePath(1, 1, 3, 3, "");