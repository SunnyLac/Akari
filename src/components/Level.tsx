import React from "react";


interface LevelProps {
  level: string;
  onSelectLevel: (level: string, gridSize: number, boardString: string) => void;
};



const Level: React.FC<LevelProps> = ({level, onSelectLevel}) => {
  let example = "nevermind";
  let boardString: string;
  let gridSize: number;
  switch(level) {
    case "Level 1":
        example = "Level 1 has been clicked";
        boardString = "32 43\n62\n04\n20 34\n23 46";
        gridSize = 7;
        break;
    case "Level 2":
        example = "Level 2 has been clicked";
        gridSize = 4;
        break;
    case "Level 3":
        example = "Level 3 has been clicked";
        gridSize = 5;
        break;
    case "Level 4":
        example = "Level 4 has been clicked";
        gridSize = 6;
        break;
    case "Level 5":
        example = "Level 5 has been clicked";
        gridSize = 10;
        break;
    default:
        example = "";
        gridSize = 0;
}
    return <>
    <button onClick={() => onSelectLevel(example, gridSize, boardString)}>
      {level}
    </button>
    </>;
};

export default Level;