/* const getMazePath = (sr, sc, dr, dc, psf) => {
    if(sr > dr || sc > dc){
        return;
    }
    if(sr === dr && sc === dc){

    }
    getMazePath(sr, sc + 1, dr, dc, psf + "h");
    getMazePath(sr + 1, sc, dr, dc, psf + "v");
}


 */

const getMazePath = (sr, sc, dr, dc) => {
    if (sr === dr && sc === dc) {
        return [""];
    }
    let horizontalPath = [];
    let verticalPath = [];
    if (sc < dc) {
        horizontalPath = getMazePath(sr, sc + 1, dr, dc);
    }
    if (sr < dr) {
        verticalPath = getMazePath(sr + 1, sc, dr, dc);
    }
    const myPath = [];
    for (let i = 0; i < horizontalPath.length; i++) {
        myPath.push(`h${horizontalPath[i]}`);
    }
    for (let i = 0; i < verticalPath.length; i++) {
        myPath.push(`v${verticalPath[i]}`);
    }
    return myPath;
}

console.log(getMazePath(1, 1, 2, 2))

