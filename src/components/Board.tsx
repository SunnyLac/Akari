import React from "react";
import Cell from "./Cell";
import '../App.css';

interface BoardProps {
    board: any[][];
    level: string;
    gridSize: number;
    onNewBoardUpdate: (newBoard: any[][]) => void;
    
};

const Board: React.FC<BoardProps> = ({board, level, gridSize, onNewBoardUpdate}) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Set number of columns
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,    // Set number of rows
    };

    const updateBoardState = (rowIdx: number, colIdx: number, new_icon: string) => {
        console.log(`${rowIdx}-${colIdx}-${new_icon}`);
        let newBoard = [...board];
        newBoard[rowIdx][colIdx] = new_icon;
        // console.table(board);
        onNewBoardUpdate(newBoard);
    }

    

    const buttons = board.map((row, rowIdx) => 
        row.map((col, colIdx) => (
            <Cell key={`${level}-${rowIdx}-${colIdx}`} icon={board[rowIdx][colIdx]} rowIdx={rowIdx} colIdx={colIdx} updateBoard={updateBoardState} />
        ))
    );

    return <>
    <div className="Board" style={gridStyle}>
        {buttons}
    </div>
    </>;
};

export default Board;