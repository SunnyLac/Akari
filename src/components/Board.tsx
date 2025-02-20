import React, { useState } from "react";
import '../App.css';

interface BoardProps {
    level: string;
};

const Board: React.FC<BoardProps> = ({level}) => {
    const gridSize=9;
    const rowSize = gridSize**0.5; // Calculate the row and column size

    const gridStyle = {
        gridTemplateColumns: `repeat(${rowSize}, 1fr)`, // Set number of columns
        gridTemplateRows: `repeat(${rowSize}, 1fr)`,    // Set number of rows
    };

    // Produces the number of buttons needed
    const buttons = Array.from({ length: gridSize }, (_, index) => (
        <button key={index}>Button {index + 1}</button>
    ));


    return <>
    <div className="Board" style={gridStyle}>
        {buttons}
    </div>
    </>;
};

export default Board;