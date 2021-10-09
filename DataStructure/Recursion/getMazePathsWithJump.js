
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

console.log(getMazePathsWithJump(1, 1, 3, 3));
/* 
[
  'h1h1v1v1', 'h1h1v2',   'h1v1h1v1',
  'h1v1v1h1', 'h1v1d1',   'h1v2h1',
  'h1d1v1',   'h2v1v1',   'h2v2',
  'v1h1h1v1', 'v1h1v1h1', 'v1h1d1',
  'v1h2v1',   'v1v1h1h1', 'v1v1h2',
  'v1d1h1',   'v2h1h1',   'v2h2',
  'd1h1v1',   'd1v1h1',   'd1d1',
  'd2'
]
 */