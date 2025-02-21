import React, {useState} from 'react';
import './App.css';

import Board from './components/Board';
import Level from './components/Level';



function App() {
    const [selectedLevel, setSelectedLevel] = useState<string>("");
    const [gridSize, setGridSize] = useState<number>(10);
    const levels = ["Level 1", "Level 2", "Level 3", "Level 4","Level 5"]; // Example levels
    const handleSelectedLevel = (level: string, gridSize: number) => {
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
                <Board level={selectedLevel} gridSize={gridSize}></Board>
            </div>
            <div>
                {selectedLevel}
            </div>
        </>
    );
}

export default App;
