import Board from './connect4_helper_files/Board';
import React, { Component } from 'react';
import minimax from './connect4_helper_files/minimax';
import deepCopy2DArray from './connect4_helper_files/deepCopy2DArray';
import new2DArray from './connect4_helper_files/new2DArray';

import Head from "next/head";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const HUMAN = "you";
const AI = "ai";
const TOTALNUMOFROWS = 6;
const TOTALNUMOFCOLS = 7;


class Connect4Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: new2DArray(TOTALNUMOFROWS, TOTALNUMOFCOLS), // i.e. squares[rowIdx][colIdx] is initialized to null and will be either HUMAN or AI when pieces are placed onto board
            winner: null,
        };
        this.handleClick = this.handleClick.bind(this);
        this.findLegalRowIdxWithinColumn = this.findLegalRowIdxWithinColumn.bind(this);
        this.calculateWinner = this.calculateWinner.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.aiCalculatesNextMove = this.aiCalculatesNextMove.bind(this);
    }

    handleClick(selectedColIdx) {
        const squares = deepCopy2DArray(this.state.squares);
        const legalRowPositionToFillIdx = this.findLegalRowIdxWithinColumn(selectedColIdx);
        if (legalRowPositionToFillIdx !== -1) {
            squares[legalRowPositionToFillIdx][selectedColIdx] = HUMAN;
            let winner = this.calculateWinner(squares, HUMAN, legalRowPositionToFillIdx, selectedColIdx);
            // let the AI make a move if it's the AI's turn and the game isn't over
            if (winner === null) {
                const [aiSelectedRowIdx, aiSelectedColIdx] = this.aiCalculatesNextMove(squares);
                squares[aiSelectedRowIdx][aiSelectedColIdx] = AI;
                winner = this.calculateWinner(squares, AI, aiSelectedRowIdx, aiSelectedColIdx);
            }
            this.setState(prevState => ({
                squares: squares,
                winner: winner
            }));
        }
    }

    handleReset() {
        this.setState({
            squares: new2DArray(TOTALNUMOFROWS, TOTALNUMOFCOLS),
            winner: null
        });
    }

    aiCalculatesNextMove(board) {
        /**
         * This function calculates the optimal move for the ai using the minimax algorithm.
         * This function takes in a board (2 x 2) array with board[rowIdx][colIdx] === HUMAN or AI or null.
         * This function returns the row index and column index (the position on the board)
         * such that the AI should place it piece.
         */

        let [optimalRowIdx, optimalColIdx] = minimax(board, 5, Number.MIN_VALUE, Number.MAX_VALUE, true, AI, HUMAN);
        // let max = 6;
        // let min = 0;
        // let randIdx = Math.floor(Math.random() * (max - min + 1) + min);
        // let aiSelectedIdx = this.findLegalRowIdxWithinColumn(randIdx);
        // while (aiSelectedIdx === -1) {
        //     randIdx = Math.floor(Math.random() * (max - min + 1) + min);
        //     aiSelectedIdx = this.findLegalRowIdxWithinColumn(randIdx);
        // }
        return [optimalRowIdx, optimalColIdx];
    }

    findLegalRowIdxWithinColumn(selectedColIdx) {
        /**
         * Returns the row index of a legal square that can be filled.
         * Note the legal square will be within the same column as selectedColIdx.
         * If all the squares within selectedColIdx's column are filled, then this function returns -1.
         */
        const didNotFindLegalRowIdxWithinColumnIdx = -1;
        for (let rowIdx = 0; rowIdx < this.state.squares.length; rowIdx++) {
            if (this.state.squares[rowIdx][selectedColIdx] === null) {
                return rowIdx;
            }
        }
        return didNotFindLegalRowIdxWithinColumnIdx;
    }

    calculateWinner(board, mostRecentPlayer, mostRecentSelectionRowIdx, mostRecentSelectionColIdx) {
        /**
         * Returns the name of the winner HUMAN or AI. If no winner, returns null.
         */

        let winner = null;

        const WINDOW = 4;

        // if game just started, there is no winner
        if (mostRecentSelectionRowIdx === null) {
            return winner;
        }

        // Check horizontal
        for (let colIdx = 0; colIdx + WINDOW <= TOTALNUMOFCOLS; colIdx++) {
            const fourHorizontalAdjacentSquares = board[mostRecentSelectionRowIdx].slice(colIdx, colIdx + WINDOW);
            if (fourHorizontalAdjacentSquares.every(val => val === mostRecentPlayer)) {
                winner = mostRecentPlayer;
                return winner;
            }
        }


        // Check vertical
        for (let rowIdx = 0; rowIdx + WINDOW <= TOTALNUMOFROWS; rowIdx++) {
            let matchingMostRecentPlayerCounter = 0;
            for (let offset = 0; offset < WINDOW; offset++) {
                if (board[rowIdx + offset][mostRecentSelectionColIdx] === mostRecentPlayer) {
                    matchingMostRecentPlayerCounter++;
                }
                if (matchingMostRecentPlayerCounter === WINDOW) {
                    winner = mostRecentPlayer;
                    return winner;
                }
            }
        }


        // Check Diagonal

        // check positively sloped diagonal... from bottom-left to top-right
        const positiveDiagonalArr = [];
        let rowIdx = mostRecentSelectionRowIdx;
        let colIdx = mostRecentSelectionColIdx;

        while (rowIdx - 1 >= 0 && colIdx - 1 >= 0) {
            rowIdx--;
            colIdx--;
        }

        while (rowIdx < TOTALNUMOFROWS && colIdx < TOTALNUMOFCOLS) {
            positiveDiagonalArr.push(board[rowIdx][colIdx]);
            rowIdx++;
            colIdx++;
        }

        for (let i = 0; i + WINDOW <= positiveDiagonalArr.length; i++) {
            const fourPositiveDiagonalAdjacentSquares = positiveDiagonalArr.slice(i, i + WINDOW);
            if (fourPositiveDiagonalAdjacentSquares.every(val => val === mostRecentPlayer)) {
                winner = mostRecentPlayer;
                return winner;
            }
        }

        // check negatively sloped diagonal... from top-left to bottom-right
        const negativeDiagonalArr = [];
        rowIdx = mostRecentSelectionRowIdx;
        colIdx = mostRecentSelectionColIdx;

        while (rowIdx - 1 >= 0 && colIdx + 1 < TOTALNUMOFCOLS) {
            rowIdx--;
            colIdx++;
        }

        while (rowIdx < TOTALNUMOFROWS && colIdx >= 0) {
            negativeDiagonalArr.push(board[rowIdx][colIdx]);
            rowIdx++;
            colIdx--;
        }

        for (let i = 0; i + WINDOW <= negativeDiagonalArr.length; i++) {
            const fourNegativeDiagonalAdjacentSquares = negativeDiagonalArr.slice(i, i + WINDOW);
            if (fourNegativeDiagonalAdjacentSquares.every(val => val === mostRecentPlayer)) {
                winner = mostRecentPlayer;
                return winner;
            }
        }
  

        return winner; // if no winner was found, winner variable does not change from intial null initialization
    }

    render() {

        let isGameOver = false;
        if (this.state.winner !== null) {
            isGameOver = true;
        } else if (!this.state.squares.map(row => row.includes(null)).includes(true)) { // meaning every piece on the board is filled but no winner (implying a tie)
            isGameOver = true;
        }

        // setup the display

        const horizontalRule = <hr style={{visibility: "hidden", marginBottom: "0"}} />;
        const button = <button style={{outline: "none", userSelect: "none", borderRadius: "10%", marginTop: "1em"}} onClick={this.handleReset}>Reset</button>;
        let greeting = <h5 className="d-flex justify-content-center" style={{marginTop: "1em"}}>Good luck!</h5>;
        let board = <div className="d-flex justify-content-center" style={{marginTop: "1em"}}><Board squares={this.state.squares} onClick={this.handleClick} /></div>;

        if (isGameOver) {
            board = <div className="d-flex justify-content-center"><Board squares={this.state.squares} onClick={() => {return; /* this does nothing... Disables onClick */}} /></div>;
        }

        if (this.state.winner === HUMAN) {
            greeting = <h5 className="d-flex justify-content-center fade-in" style={{color: "darkgreen", marginTop: "1em"}}>🎉 Congratulations! You won! 🎉</h5>;
        } else if (this.state.winner === AI) {
            greeting = <h5 className="d-flex justify-content-center fade-in" style={{color: "darkred", marginTop: "1em"}}>The AI won! Try again!</h5>;
        } else if (this.state.winner === null && isGameOver) { // this would mean the game ended in a tie
            greeting = <h5 className="d-flex justify-content-center fade-in">It's a draw! Try again!</h5>;
        }

        let display =   <>
                            {greeting}
                            <div style={{textAlign: "center"}}>
                                {button}
                                {horizontalRule}
                            </div>
                            {board}
                        </>;

        return (
            <>
                <Head>
                    <title>Connect 4</title>
                    <meta name="author" content="Kevin Tsai"/>
                    <meta name="description" content="Play Connect 4 against an AI that was built using the mini-max algorithm with alpha-beta pruning."/>
                </Head>
                
                <div className="container">
                    <h4 className="d-flex justify-content-center" style={{marginTop: "1em"}}>Welcome to Connect 4!</h4>
                    {display}
                </div>
            </>
        );
    };
};

export default Connect4Game;