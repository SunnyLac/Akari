import React, { useState } from "react";
import Cell from "./Cell";
import '../App.css';

interface BoardProps {
    level: string;
    gridSize: number;
};

const Board: React.FC<BoardProps> = ({level, gridSize}) => {
    // const gridSize=10;
    const totalNumberOfCells = gridSize**2;
    const gridStyle = {
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Set number of columns
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,    // Set number of rows
    };

    // Produces the number of buttons needed
    const buttons = Array.from({ length: totalNumberOfCells }, (_, index) => (
        // <button key={index}>Button {index + 1} {level}</button>
        <Cell index={index} icon="" isClickable={true}></Cell>
    ));


    return <>
    <div className="Board" style={gridStyle}>
        {buttons}
    </div>
    </>;
};

export default Board;