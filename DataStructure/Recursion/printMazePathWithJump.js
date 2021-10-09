const printMazePathWithJumps = (sr, sc, dr, dc, ans = "") => {
    if (sr === dr && sc === dc) {
        console.log(ans);
        return;
    }
    for (let i = 1; i <= (dr - sr); i++) {
        printMazePathWithJumps(sr + i, sc, dr, dc, `${ans}v${i}`);
    }
    for (let i = 1; i <= (dc - sc); i++) {
        printMazePathWithJumps(sr, sc + i, dr, dc, `${ans}h${i}`);
    }
    for (let i = 1; i <= (dc - sc) && (dr - sr); i++) {
        printMazePathWithJumps(sr + i, sc + i, dr, dc, `${ans}d${i}`);
    }
}

printMazePathWithJumps(1, 1, 3, 3, "");
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
/*
v1v1h1h1
v1v1h2
v1h1v1h1
v1h1h1v1
v1h1d1
v1h2v1
v1d1h1
v2h1h1
v2h2
h1v1v1h1
h1v1h1v1
h1v1d1
h1v2h1
h1h1v1v1
h1h1v2
h1d1v1
h2v1v1
h2v2
d1v1h1
d1h1v1
d1d1
d2
 */