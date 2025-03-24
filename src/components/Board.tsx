import React from "react";
import Cell from "./Cell";
import '../App.css';

interface BoardProps {
    board: any[][];
    level: string;
    gridSize: number;
    onNewBoardUpdate: (newBoard: any[][]) => void;
    
};

const blockType = ["black","zero","one","two","three","four"];

// Helper function that checks if the position is valid
function isValidPosition(position:number, boundry: number){
    return position < boundry && position > -1;
}

// This function searches for a bulb and returns True if it can find one, False otherwise
function inViewOfBulb(board: any[][], rowIdx: number, colIdx: number){
    const gridSize = board.length;

    let searchableTop: boolean = true;
    let searchableLeft: boolean = true;
    let searchableRight: boolean = true;
    let searchableDown: boolean = true;

    let lookTop: number = 1;
    let lookLeft: number = 1;
    let lookRight: number = 1;
    let lookDown: number = 1;

    while (searchableTop || searchableLeft || searchableRight || searchableDown){
        if (searchableTop){
            let lookTopPosition = rowIdx-lookTop;
            if (isValidPosition(lookTopPosition,gridSize)){
                if (board[lookTopPosition][colIdx] === "bulb"){
                    return true;
                }
                if (blockType.includes(board[lookTopPosition][colIdx])){
                    searchableTop = false;
                }
                lookTop++;
            }
            else{
                searchableTop = false;
            }
        }

        if (searchableLeft){
            let lookLeftPosition = colIdx-lookLeft;
            if (isValidPosition(lookLeftPosition,gridSize)){
                if (board[rowIdx][lookLeftPosition] === "bulb"){
                    return true;
                }
                if (blockType.includes(board[rowIdx][lookLeftPosition])){
                    searchableLeft = false;
                }
                lookLeft++;
            }
            else{
                searchableLeft = false;
            }
        }

        if (searchableRight){
            let lookRightPosition = colIdx+lookRight;
            if (isValidPosition(lookRightPosition,gridSize)){
                if (board[rowIdx][lookRightPosition] === "bulb"){
                    return true;
                }
                if (blockType.includes(board[rowIdx][lookRightPosition])){
                    searchableRight = false;
                }
                lookRight++;
            }
            else{
                searchableRight = false;
            }
        }

        if (searchableDown){
            let lookDownPosition = rowIdx+lookDown;
            if (isValidPosition(lookDownPosition,gridSize)){
                if (board[lookDownPosition][colIdx] === "bulb"){
                    return true;
                }
                if (blockType.includes(board[lookDownPosition][colIdx])){
                    searchableDown = false;
                }
                lookDown++;
            }
            else{
                searchableDown = false;
            }
        }
    }
    return false;
}

//TODO: finish function
// This function finds all "_" or "lit" and then spreads from that point in search for a bulb
// if it finds a bulb, it becomes "lit" or "_"
function reCalculateLighting(board: any[][]){
    let calculatedBoard = [...board];
    const gridSize = calculatedBoard.length;
    for (let rowIdx = 0; rowIdx < gridSize; rowIdx++){
        for (let colIdx = 0; colIdx < gridSize; colIdx++){
            if (calculatedBoard[rowIdx][colIdx] === "_" || calculatedBoard[rowIdx][colIdx] === "lit"){
                if (inViewOfBulb(calculatedBoard, rowIdx, colIdx)){
                    calculatedBoard[rowIdx][colIdx] = "lit";
                }
                else{
                    calculatedBoard[rowIdx][colIdx] = "_";
                }
            }
        }
    }
    return calculatedBoard;
}

const Board: React.FC<BoardProps> = ({board, level, gridSize, onNewBoardUpdate}) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Set number of columns
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,    // Set number of rows
    };

    const updateBoardState = (rowIdx: number, colIdx: number, new_icon: string) => {
        let newBoard = [...board];

        // Adds the icon
        newBoard[rowIdx][colIdx] = new_icon;

        // Resets all lit icons
        // let removedLitBoard = resetLighting(newBoard);

        //Recalculates all bulb and their lighting pathway
        let litBoard = reCalculateLighting(newBoard);
        onNewBoardUpdate(litBoard);
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