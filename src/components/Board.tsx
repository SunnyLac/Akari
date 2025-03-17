import React, { useState } from "react";
import Cell from "./Cell";
import '../App.css';

interface BoardProps {
    board: any[][];
    level: string;
    gridSize: number;
};

const Board: React.FC<BoardProps> = ({board, level, gridSize}) => {
    // const totalNumberOfCells = gridSize**2;
    const gridStyle = {
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Set number of columns
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,    // Set number of rows
    };

    // Produces the number of buttons needed
    // const buttons = Array.from({ length: totalNumberOfCells }, (_, index) => (
    //     <Cell key={`${level}-${index}`} index={index} icon="" isClickable={true}></Cell>
    // ));
    const buttons = board.map((row, rowIdx) => 
        row.map((col, colIdx) => (
            <Cell key={`${level}-${rowIdx}-${colIdx}`} icon={board[rowIdx][colIdx]} />
        ))
    );

    return <>
    <div className="Board" style={gridStyle}>
        {buttons}
    </div>
    </>;
};

export default Board;