import Square from './Square';
import React, { Component } from 'react';

class Board extends React.Component {
    renderSquare(rowIdx, colIdx) {
        return (
          <Square 
            key={(rowIdx + 1) * (colIdx + 1)}
            value={this.props.squares[rowIdx][colIdx]}
            onClick={() => this.props.onClick(colIdx)}
          />
        );
    }

    render() {

        const display = [];

        // began with last row index and traverse to beginning row index because we display the rows from top row to bottom
        for (let rowIdx = this.props.squares.length - 1; rowIdx >= 0; rowIdx--) { 
            const rowOfSquares = [];
            for (let colIdx = 0; colIdx < this.props.squares[0].length; colIdx++) {
                rowOfSquares.push(this.renderSquare(rowIdx, colIdx));
            }
            display.push(<tr key={rowIdx} className="board-row">{rowOfSquares}</tr>);
        }

        return (
            <div className="table-responsive">
                <table className="table table-borderless">
                    <tbody>
                        {display}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Board;