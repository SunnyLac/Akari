import React, {useState} from 'react';
// import logo from './logo.svg';

import './App.css';

import Board from './components/Board'
import Level from './components/Level';



function App() {
    const [selectedLevel, setSelectedLevel] = useState<string>("");
    const levels = ["Level 1", "Level 2", "Level 3", "Level 4","Level 5"]; // Example levels
    const handleSelectedLevel = (level: string) => {
        setSelectedLevel(level);
    }

    return (
        <>
            <div id="Level-Selection-Section">
                {levels.map((level) => (
                    <Level key={level} level={level} onSelectLevel={handleSelectedLevel} />
                ))}
            </div>
            <div id="Board-Section">
                <Board level={selectedLevel}></Board>
            </div>
        </>
    );
}

export default App;
