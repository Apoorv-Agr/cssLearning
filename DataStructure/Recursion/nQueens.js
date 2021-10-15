const isQueenSafe = (chess, row, col) => {
    // vertical Up
    for (let i = row - 1, j = col; i >= 0; i--) {
        if (chess[i][j] === 1) {
            return false;
        }
    }
    // Left Diagonal 
    for (let i = row - 1, j = col - 1; j >= 0 && i >= 0; i--, j--) {
        if (chess[i][j] === 1) {
            return false;
        }
    }
    // Right Diagonal
    for (let i = row - 1, j = col + 1; j < chess.length && i >= 0; i--, j++) {
        if (chess[i][j] === 1) {
            return false;
        }
    }
    return true;
}

const getNQueensPlacement = (chessBoard = [[]], qsf = "", row = 0) => {

    if (row === chessBoard.length) {
        console.log(qsf);
        return;
    }
    for (let col = 0; col < chessBoard.length; col++) {
        if (isQueenSafe(chessBoard, row, col) === true) {
            chessBoard[row][col] = 1;
            getNQueensPlacement(chessBoard, `${qsf} ${row}-${col},`, row + 1);
            chessBoard[row][col] = 0;
        }
    }
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

const chessBoard = getChessBoard(4);
getNQueensPlacement(chessBoard, "", 0);
