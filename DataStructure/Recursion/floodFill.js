/* This is graph DFS :- Depth Fist Search */

const printPathFloodFill = (maze = [[]], sr, sc, ans = "", visited = [[]]) => {
    // console.log("maze : ", maze, ", visited : ", visited);
    if (sr < 0 || sc < 0 || sr === maze.length || sc === maze[0].length || maze[sr][sc] === 1 || visited[sr][sc] === true) {
        return;
    }
    if (sr === maze.length - 1 && sc === maze[0].length - 1) {
        console.log(ans);
        return;
    }
    visited[sr][sc] = true;
    // 1st Top Call
    printPathFloodFill(maze, sr - 1, sc, `${ans}t`, visited);
    // 2nd left Call 
    printPathFloodFill(maze, sr, sc - 1, `${ans}l`, visited);
    // 3rd down Call
    printPathFloodFill(maze, sr + 1, sc, `${ans}d`, visited);
    // 4th Right Call
    printPathFloodFill(maze, sr, sc + 1, `${ans}r`, visited);
    visited[sr][sc] = false;
}


const inputMaze = [[]];
const n = 4, m = 4;
for (let i = 0; i < n; i++) {
    inputMaze[i] = [];
    for (let y = 0; y < m; y++) {
        inputMaze[i][y] = 0;
    }
}
inputMaze[0][1] = 1;
inputMaze[0][2] = 1;

inputMaze[1][2] = 1;

inputMaze[2][0] = 1;

inputMaze[3][1] = 1;

const visited = [[]];
for (let i = 0; i < n; i++) {
    visited[i] = [];
    for (let y = 0; y < m; y++) {
        visited[i][y] = false;
    }
}

printPathFloodFill(inputMaze, 0, 0, "", visited)
