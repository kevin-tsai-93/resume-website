import deepCopy2DArray from './deepCopy2DArray';

export default function minimax(board, depth, alpha, beta, isMaximizingPlayer, maximizingPlayer, minimizingPlayer) {
    /**
     * minimax algorithm to determine how and where the ai will make its move
     * refer to the pseudocode on wikipedia
     * it will return the optimal rowIdx and colIdx, the location to place the piece onto the board
     * return value looks like [optimalRowIdx, optimalColIdx, maxScore]... the 0th and 1st position of this array tell where the AI should go
     * 
     * board is a row x col array
     * depth tells you how far down the tree you will traverse to find the calculated score
     * maximizingPlayer is the player that is trying to win... in this case the AI = "ai"
     * minimizingPlayer is the player that is trying to prevent the maximizingPlayer from winning... in this case HUMAN = "you"
     */

    const possibleColumnIndices = getAllValidColumnPositions(board);
    const isTheEndOfGame = isGameOver(board, maximizingPlayer, minimizingPlayer);

    if (depth === 0 || isTheEndOfGame) {
        if (isTheEndOfGame) {
            if (isWinner(board, maximizingPlayer)) {
                return [null, null, 99999999999];
            } else if (isWinner(board, minimizingPlayer)) {
                return [null, null, -99999999999];
            } else {    // Game is over. A tie has occurred.
                return [null, null, 0];
            }
        }
        else { // else the depth is 0
            return [null, null, calculateScore(board, maximizingPlayer, minimizingPlayer)];
        }
    }

    if (isMaximizingPlayer) {
        let maxScore = Number.MIN_VALUE;
        let randomIdx = Math.floor(Math.random() * possibleColumnIndices.length);
        let colIdx = possibleColumnIndices[randomIdx];        
        let rowIdx = findLegalRowIdxWithinColumn(board, colIdx);

        for (let i = 0; i < possibleColumnIndices.length; i++) {
            let currRowIdx = findLegalRowIdxWithinColumn(board, possibleColumnIndices[i]);
            const newBoard = putPieceOntoTheBoard(currRowIdx, possibleColumnIndices[i], board, maximizingPlayer);
            const newScore = minimax(newBoard, depth - 1, alpha, beta, false, maximizingPlayer, minimizingPlayer)[2];
            if (newScore > maxScore) {
                maxScore = newScore;
                colIdx = possibleColumnIndices[i];
                rowIdx = currRowIdx;
            }
            let newAlpha = Math.max(alpha, maxScore);
            if (newAlpha >= beta) {
                break;
            }
        }
        return [rowIdx, colIdx, maxScore];
    } else { // else it's the minimizing player
        let minScore = Number.MAX_VALUE;
        let randomIdx = Math.floor(Math.random() * possibleColumnIndices.length);
        let colIdx = possibleColumnIndices[randomIdx];        
        let rowIdx = findLegalRowIdxWithinColumn(board, colIdx);

        for (let i = 0; i < possibleColumnIndices.length; i++) {
            let currRowIdx = findLegalRowIdxWithinColumn(board, possibleColumnIndices[i]);
            const newBoard = putPieceOntoTheBoard(currRowIdx, possibleColumnIndices[i], board, minimizingPlayer);
            const newScore = minimax(newBoard, depth - 1, alpha, beta, true, maximizingPlayer, minimizingPlayer)[2];
            if (newScore < minScore) {
                minScore = newScore;
                colIdx = possibleColumnIndices[i];
                rowIdx = currRowIdx;
            }
            let newBeta = Math.min(beta, minScore);
            if (newBeta <= alpha) {
                break;
            }
        }
        return [rowIdx, colIdx, minScore];
    }
}

function getAllValidColumnPositions(board) {
    /**
     * Returns all the possible columns that have a valid row position to place the piece onto the board
     * The return value is an array with the elements inside being the index of the column position
     */

    const TOTALNUMOFCOLUMNS = board[0].length;

    // get all the possible moves that the player can drop onto the board
    // will have 2 arrays: column index array and row index array
    // refer to the note below about the relationship between these two arrays
    const columnIndicesOfBoard = []; // this will look like [0,1,2,3,4,5,6]
    for (let i = 0; i < TOTALNUMOFCOLUMNS; i++) {
        columnIndicesOfBoard.push(i);
    }

    // note that possibleRowIndicesToPlacePieceOntoBoard is relative to columnIndicesOfBoard
    // i.e. columnIndicesOfBoard = [0,1,2,3,4,5,6]
    // i.e. possibleRowIndicesToPlacePieceOntoBoard = [3,3,4,2,1,2,1]
    // this means board[3][0]... board[3][1]... board[4][2]... board[2][3]... board[1][4]... etc are pieces that can be placed onto the board
    const possibleRowIndicesToPlacePieceOntoBoard = columnIndicesOfBoard.map(colIdx => findLegalRowIdxWithinColumn(board, colIdx)); // note that possibleRowIndicesToPlacePieceOntoBoard might have -1 values

    // get all the columns for which the corresponding possibleRowIndicesToPlacePieceOntoBoard !== -1
    const possibleColumnIndicesToPlacePieceOntoBoard = []
    for (let i = 0; i < columnIndicesOfBoard.length; i++) {
        if (possibleRowIndicesToPlacePieceOntoBoard[i] !== -1) {
            possibleColumnIndicesToPlacePieceOntoBoard.push(i);
        }
    }

    return possibleColumnIndicesToPlacePieceOntoBoard;
}

function putPieceOntoTheBoard(rowIdx, colIdx, board, player) {
    /**
     * returns a new board such that the newBoard[rowIdx][colIdx] = player and the other values are the same as board
     */

    const newBoard = deepCopy2DArray(board);
    newBoard[rowIdx][colIdx] = player;

    return newBoard;
}

function isGameOver(board, maximizingPlayer, minimizingPlayer) {
    if (isWinner(board, maximizingPlayer)) {
        return true;
    } else if (isWinner(board, minimizingPlayer)) {
        return true;
    } else if (isBoardAllFilled(board)) {
        return true;
    } else {
        return false;
    }
}

function isBoardAllFilled(board) {
    return board.map(row => row.every(piece => piece !== null)).every(isRowFilled => isRowFilled === true);
}

function isWinner(board, player) {
    const WINDOWLENGTH = 4;
    const TOTALNUMOFROWS = board.length;
    const TOTALNUMOFCOLUMNS = board[0].length;

    // check horizontal
    for (let currRowIdx = 0; currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        for (let offset = 0; offset + WINDOWLENGTH <= TOTALNUMOFCOLUMNS; offset++) {
            const horizontalFourAdjacentSquares = board[currRowIdx].slice(offset, offset + WINDOWLENGTH);
            if (horizontalFourAdjacentSquares.every(val => val === player)) {
                return true;
            }
        }
    }

    // Check vertical
    for (let currColIdx = 0; currColIdx < TOTALNUMOFCOLUMNS; currColIdx++) {
        const aColumnOfSquaresArr = [];
        for (let currRowIdx = 0; currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
            aColumnOfSquaresArr.push(board[currRowIdx][currColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= TOTALNUMOFROWS; offset++) {
            const verticalFourAdjacentSquares = aColumnOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            if (verticalFourAdjacentSquares.every(val => val === player)) {
                return true;
            }
        }
    }

    // Check diagonals

    // Calculate score for positive sloping diagonal (bottom-left to top-right FOR THE LEFT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2) - 1; currRowIdx >= 0; currRowIdx--) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = 0; runningRowIdx < TOTALNUMOFROWS && runningColIdx < TOTALNUMOFCOLUMNS; runningRowIdx++, runningColIdx++) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            if (diagonalFourAdjacentSquares.every(val => val === player)) {
                return true;
            }
        }
    }

    // Continue calculating the score for positive sloping diagonal (bottom-left to top-right FOR THE RIGHT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2); currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = TOTALNUMOFCOLUMNS - 1; runningRowIdx >= 0 && runningColIdx > 0; runningRowIdx--, runningColIdx--) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            if (diagonalFourAdjacentSquares.every(val => val === player)) {
                return true;
            }
        }
    }

    // Calculate score for negative sloping diagonal (top-left to bottom-right FOR THE LEFT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2); currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = 0; runningRowIdx >= 0 && runningColIdx < TOTALNUMOFCOLUMNS; runningRowIdx--, runningColIdx++) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            if (diagonalFourAdjacentSquares.every(val => val === player)) {
                return true;
            }
        }
    }

    // Continue calculating the score for negative sloping diagonal (top-left to bottom-right FOR THE RIGHT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2) - 1; currRowIdx >= 0; currRowIdx--) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = TOTALNUMOFCOLUMNS - 1; runningRowIdx < TOTALNUMOFROWS && runningColIdx > 0; runningRowIdx++, runningColIdx--) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            if (diagonalFourAdjacentSquares.every(val => val === player)) {
                return true;
            }
        }
    }

    // if you reach here, there is no winner
    return false;

}

function findLegalRowIdxWithinColumn(board, selectedColIdx) {
    /**
     * Returns the row index of a legal square that can be filled given the board (2 dimensional row x col).
     * Note the legal square will be within the same column as selectedColIdx.
     * If all the squares within selectedColIdx's column are filled, then this function returns -1.
     */
    const didNotFindLegalRowIdxWithinColumnIdx = -1;
    for (let rowIdx = 0; rowIdx < board.length; rowIdx++) {
        if (board[rowIdx][selectedColIdx] === null) {
            return rowIdx;
        }
    }
    return didNotFindLegalRowIdxWithinColumnIdx;
}

function calculateScoreForThese4Squares(arr, maximizingPlayer, minimizingPlayer) {
    /**
     * Returns the score for the given arr, assuming the length of the arr is 4
     */

    let score = 0;

    if (arr.filter(val => val === maximizingPlayer).length === 3 && arr.filter(val => val === null).length === 1) {
        score += 15;
    } else if (arr.filter(val => val === maximizingPlayer).length === 2 && arr.filter(val => val === null).length === 2) {
        score += 2;
    }

    if (arr.filter(val => val === minimizingPlayer).length === 3 && arr.filter(val => val === null).length === 1) {
        score -= 4;
    }

    return score;
}

function calculateScore(board, maximizingPlayer, minimizingPlayer) {
    /**
     * Returns the score for placing maximizingPlayer's piece onto the board whose location is rowIdx and colIdx.
     */

    let score = 0;

    const TOTALNUMOFROWS = board.length;
    const TOTALNUMOFCOLUMNS = board[0].length;
    const WINDOWLENGTH = 4;
    const CENTERCOLUMNIDX = Math.floor(TOTALNUMOFCOLUMNS / 2);

    // score for center piece (preference center location)
    for (let currRowIdx = 0; currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        if (board[currRowIdx][CENTERCOLUMNIDX] === maximizingPlayer) {
            score += 3;
        }
    }


    // Score for horizontal
    // Scores are calculated for window lengths of 4
    for (let currRowIdx = 0; currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        for (let offset = 0; offset + WINDOWLENGTH <= TOTALNUMOFCOLUMNS; offset++) {
            const horizontalFourAdjacentSquares = board[currRowIdx].slice(offset, offset + WINDOWLENGTH);
            score += calculateScoreForThese4Squares(horizontalFourAdjacentSquares, maximizingPlayer, minimizingPlayer);
        }
    }

    // Score for vertical
    // Scores are calculated for window lengths of 4
    for (let currColIdx = 0; currColIdx < TOTALNUMOFCOLUMNS; currColIdx++) {
        const aColumnOfSquaresArr = [];
        for (let currRowIdx = 0; currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
            aColumnOfSquaresArr.push(board[currRowIdx][currColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= TOTALNUMOFROWS; offset++) {
            const verticalFourAdjacentSquares = aColumnOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            score += calculateScoreForThese4Squares(verticalFourAdjacentSquares, maximizingPlayer, minimizingPlayer);
        }
    }

    // Score for diagonal
    // Scores are calculated for window lengths of 4

    // Calculate score for positive sloping diagonal (bottom-left to top-right FOR THE LEFT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2) - 1; currRowIdx >= 0; currRowIdx--) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = 0; runningRowIdx < TOTALNUMOFROWS && runningColIdx < TOTALNUMOFCOLUMNS; runningRowIdx++, runningColIdx++) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            score += calculateScoreForThese4Squares(diagonalFourAdjacentSquares, maximizingPlayer, minimizingPlayer);
        }
    }

    // Continue calculating the score for positive sloping diagonal (bottom-left to top-right FOR THE RIGHT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2); currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = TOTALNUMOFCOLUMNS - 1; runningRowIdx >= 0 && runningColIdx > 0; runningRowIdx--, runningColIdx--) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            score += calculateScoreForThese4Squares(diagonalFourAdjacentSquares, maximizingPlayer, minimizingPlayer);
        }
    }

    // Calculate score for negative sloping diagonal (top-left to bottom-right FOR THE LEFT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2); currRowIdx < TOTALNUMOFROWS; currRowIdx++) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = 0; runningRowIdx >= 0 && runningColIdx < TOTALNUMOFCOLUMNS; runningRowIdx--, runningColIdx++) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            score += calculateScoreForThese4Squares(diagonalFourAdjacentSquares, maximizingPlayer, minimizingPlayer);
        }
    }

    // Continue calculating the score for negative sloping diagonal (top-left to bottom-right FOR THE RIGHT HALF OF THE BOARD)
    for (let currRowIdx = Math.floor(TOTALNUMOFROWS / 2) - 1; currRowIdx >= 0; currRowIdx--) {
        const aDiagonalOfSquaresArr = [];
        for (let runningRowIdx = currRowIdx, runningColIdx = TOTALNUMOFCOLUMNS - 1; runningRowIdx < TOTALNUMOFROWS && runningColIdx > 0; runningRowIdx++, runningColIdx--) {
            aDiagonalOfSquaresArr.push(board[runningRowIdx][runningColIdx]);
        }
        for (let offset = 0; offset + WINDOWLENGTH <= aDiagonalOfSquaresArr.length; offset++) {
            const diagonalFourAdjacentSquares = aDiagonalOfSquaresArr.slice(offset, offset + WINDOWLENGTH);
            score += calculateScoreForThese4Squares(diagonalFourAdjacentSquares, maximizingPlayer, minimizingPlayer);
        }
    }

    return score;
}