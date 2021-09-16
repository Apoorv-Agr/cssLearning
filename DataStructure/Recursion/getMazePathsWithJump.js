
const getMazePathsWithJump = (sr, sc, dr, dc) => {
    if (sr === dr && sc === dc) {
        return [""];
    }
    const paths = [];
    // Horizontal Moves
    for (let i = 1; i <= dc - sc; i++) {
        const horizontalPath = (getMazePathsWithJump(sr, sc + i, dr, dc));
        for (let y = 0; y < horizontalPath.length; y++) {
            paths.push(`h${i}${horizontalPath[y]}`);
        }
    }
    // Vertical Moves
    for (let i = 1; i <= dr - sr; i++) {
        const verticalPath = (getMazePathsWithJump(sr + i, sc, dr, dc));
        for (let y = 0; y < verticalPath.length; y++) {
            paths.push(`v${i}${verticalPath[y]}`);
        }
    }

    // Diagonal Path Moves 
    for (let i = 1; i <= dc - sc && dr - sr; i++) {
        const diagonalPaths = (getMazePathsWithJump(sr + i, sc + i, dr, dc));
        for (let y = 0; y < diagonalPaths.length; y++) {
            paths.push(`d${i}${diagonalPaths[y]}`);
        }
    }
    return paths;
}

console.log(getMazePathsWithJump(1, 1, 2, 2));