import React, {useState} from 'react';
import { convertToValidNumber, blockType, wordToNumber, directions, isValidPosition } from './helper/helper';
import './App.css';

import Board from './components/Board';
import Level from './components/Level';

function createBoard(stringInput: string, gridSize: number){
    let blockTypeList = stringInput.split("\n");
    const board = Array.from({ length: gridSize }, () => Array(gridSize).fill('_'));
    for (let i = 0; i < blockTypeList.length; i++){
        let lines = blockTypeList[i].split(" ");
        for (let j = 0; j < lines.length; j++){
            const blockLine = lines[j].split("");
            let row = convertToValidNumber(blockLine[0]);
            for (let k = 1; k < blockLine.length; k++){
                let col = convertToValidNumber(blockLine[k]);
                board[row][col] = blockType[i];
            }
        }
    }
    return board;
};



function isAllSquaresFilled(board: any[][]){
    const gridSize = board.length;
    for (let rowIdx = 0; rowIdx < gridSize; rowIdx++){
        for (let colIdx = 0; colIdx < gridSize; colIdx++){
            if (board[rowIdx][colIdx] === "_"){
                return false;
            }
        }
    }
    return true;
}

function isValidLightPlacement(board: any[][]){
    const gridSize = board.length;
    let count;
    for (let rowIdx = 0; rowIdx < gridSize; rowIdx++){
        count = 0;
        for (let colIdx = 0; colIdx < gridSize; colIdx++){
            if (board[rowIdx][colIdx] === "bulb") count++;
            if (blockType.includes(board[rowIdx][colIdx])) count--;
            if (count >= 2) return false;
        }
    }
    for (let colIdx = 0; colIdx < gridSize; colIdx++){
        count = 0;
        for (let rowIdx = 0; rowIdx < gridSize; rowIdx++){
            if (board[rowIdx][colIdx] === "bulb") count++;
            if (blockType.includes(board[rowIdx][colIdx])) count--;
            if (count >= 2) return false;
        }
    }
    return true;
}

function isBlackSquareSatisfied(board: any[][]){
    const gridSize = board.length;
    for (let rowIdx = 0; rowIdx < gridSize; rowIdx++){
        for (let colIdx = 0; colIdx < gridSize; colIdx++){
            if (blockType.includes(board[rowIdx][colIdx]) && board[rowIdx][colIdx] !== "black"){
                const correctCount = wordToNumber[board[rowIdx][colIdx]];
                if (countTheSides(rowIdx,colIdx,board) !== correctCount) return false;
            }
        }
    }
    return true;
}


function countTheSides(rowIdx:number, colIdx: number, board: any[][]){
    const gridSize = board.length;
    let count = 0;
    for (const [dx,dy] of directions){
        if (isValidPosition((rowIdx+dx),gridSize) && isValidPosition((colIdx+dy),gridSize)){
            if (board[rowIdx+dx][colIdx+dy] === "bulb") count++;
        }
    }
    return count;
}

function checkBoard(board: any[][]) {
    if (!isAllSquaresFilled(board)) {
        alert("Some Black Squares Exist");
        return;
    }
    if (!isValidLightPlacement(board)) {
        alert("Some Bulbs are in each other's path");
        return;
    }
    if (!isBlackSquareSatisfied(board)) {
        alert("Too Many Bulbs Near Some Squares");
        return;
    }
    alert("You've Won!");
}

function handleRightClick(event: React.MouseEvent) {
    event.preventDefault(); // Prevent the default context menu
    console.log("Right click detected!");
    // Do your custom logic here
}

function App() {
    const [selectedLevel, setSelectedLevel] = useState<string>("");
    const [boardState, updateBoardState] = useState<any[][]>([[]]);
    const [gridSize, setGridSize] = useState<number>(0);
    const levels = ["Level 1", "Level 2", "Level 3", "Level 4","Level 5"]; // Example levels
    const handleSelectedLevel = (level: string, gridSize: number, boardString: string) => {
        const board = createBoard(boardString,gridSize);
        updateBoardState(board);
        setSelectedLevel(level);
        setGridSize(gridSize);
    }
    return (
        <>
            <div id="Level-Selection-Section">
                {levels.map((level) => (
                    <Level key={level} level={level} onSelectLevel={handleSelectedLevel} />
                ))}
            </div>
            <div id="Board-Section" onContextMenu={handleRightClick}>
                <Board board={boardState} level={selectedLevel} gridSize={gridSize} onNewBoardUpdate={updateBoardState}></Board>
            </div>
            <div>
                {selectedLevel !== "" ? <button className="checkButtonPosition" onClick={() => {checkBoard(boardState)}}>Check</button> : null}
            </div>
        </>
    );
}

export default App;
