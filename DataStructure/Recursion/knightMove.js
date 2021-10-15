

const displayMoveBoard = (chessBoard = [[]]) => {
    console.log('chessBoard : ', chessBoard)
    /* for (let i = 0; i < chessBoard.length; i++) {
        for (let y = 0; y < chessBoard[0].length; y++) {
            console.log(chessBoard[i][y] + " ");
        }
    } */
    return;
}

const getChessBoard = (n = 2) => {
    const chessBoard = [];
    for (let index = 0; index < n; index++) {
        chessBoard[index] = [];
        for (let y = 0; y < n; y++) {
            chessBoard[index][y] = 0;
        }
    }
    return chessBoard;
}

const chessBoard = getChessBoard(5);

// console.log('chessBoard : ',chessBoard);
// return;

const getKnightMoves = (chessBoard = [[]], row, col, moves) => {

    if (row < 0 || col < 0 || row >= chessBoard.length || col >= chessBoard.length || chessBoard[row][col] > 0) {
        return;
    } else if (moves === chessBoard.length * chessBoard.length) {
        chessBoard[row][col] = moves;
        displayMoveBoard(chessBoard);
        chessBoard[row][col] = 0;
        return;
    }

    // eight Moves
    chessBoard[row][col] = moves;
    getKnightMoves(chessBoard, row - 2, col + 1, moves + 1);
    getKnightMoves(chessBoard, row - 1, col + 2, moves + 1);
    getKnightMoves(chessBoard, row + 1, col + 2, moves + 1);
    getKnightMoves(chessBoard, row + 2, col + 1, moves + 1);

    getKnightMoves(chessBoard, row + 2, col - 1, moves + 1);
    getKnightMoves(chessBoard, row + 1, col - 2, moves + 1);
    getKnightMoves(chessBoard, row - 1, col - 2, moves + 1);
    getKnightMoves(chessBoard, row - 2, col - 1, moves + 1);

    chessBoard[row][col] = 0;
}

getKnightMoves(chessBoard, 0, 0, 1);