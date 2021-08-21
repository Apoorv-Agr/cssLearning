'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER startRow
 *  3. INTEGER startCol
 *  4. INTEGER endRow
 *  5. INTEGER endCol
 */

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
}

function minMoves(n, startRow, startCol, endRow, endCol) {
    // Write your code here
    let dx = [2,2,1,1,-2,-2,-1,-1],dy=[1,-1,2,-2,1,-1,2,-2];
    const queue = new Queue();
    queue.enqueue([startRow,startCol,0]);
    
    const board = [];
    for(let i=0; i<n; i++) {
        board[i] = [];
        for(let j=0; j<n; j++) {
            board[i][j] = 0;
        }
    }
    board[startRow][startCol] = 1;
    let movesAns = -1;
    
    while( queue.length ) {
        const myArr = queue.dequeue();
        let x = myArr[0];
        let y = myArr[1];
        let move = myArr[2];
        
        if(x == endRow  && y == endCol ) {
            movesAns = move;
            break;
        }
        //board[x][y] = 1;
        for(let i=0; i < 8;i++){
            let nx = x+dx[i];
            let ny = y + dy[i];
            if( (nx >=0 && nx < n)  && (ny >=0 && ny < n) && (board[nx][ny] === 0) )            {
                   queue.enqueue([nx,ny,move+1]);
                   board[nx][ny] = 1;
            }
        }
    }
    return movesAns;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const startRow = parseInt(readLine().trim(), 10);

    const startCol = parseInt(readLine().trim(), 10);

    const endRow = parseInt(readLine().trim(), 10);

    const endCol = parseInt(readLine().trim(), 10);

    const result = minMoves(n, startRow, startCol, endRow, endCol);

    ws.write(result + '\n');

    ws.end();
}
