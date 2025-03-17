import React, {useState} from 'react';
import './App.css';

import Board from './components/Board';
import Level from './components/Level';


// b, 0, 1, 2, 3, 4 
const blockType = ["black","zero","one","two","three","four"];
function createBoard(stringInput: string, gridSize: number){
    let blockTypeList = stringInput.split("\n");
    const board = Array.from({ length: gridSize }, () => Array(gridSize).fill('_'));
    console.log(blockTypeList[0]);
    for (let i = 0; i < blockTypeList.length; i++){
        let lines = blockTypeList[i].split(" ");
        for (let j = 0; j < lines.length; j++){
            const [row,col] = lines[j].split("").map(Number);
            board[row][col] = blockType[i];
        }
    }
    return board;
};

function App() {
    const [selectedLevel, setSelectedLevel] = useState<string>("");
    const [boardState, updateBoardState] = useState<any[][]>([[]]);
    const [gridSize, setGridSize] = useState<number>(0);
    const levels = ["Level 1", "Level 2", "Level 3", "Level 4","Level 5"]; // Example levels
    const handleSelectedLevel = (level: string, gridSize: number, boardString: string) => {
        // console.log(boardString);
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
            <div id="Board-Section">
                <Board board={boardState} level={selectedLevel} gridSize={gridSize}></Board>
            </div>
            <div>
                {selectedLevel}
            </div>
        </>
    );
}

export default App;
