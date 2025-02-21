import React from "react";


interface LevelProps {
  level: string;
  onSelectLevel: (level: string, gridSize: number) => void;
};


const Level: React.FC<LevelProps> = ({level, onSelectLevel}) => {
  let example = "nevermind";
  let gridSize = 1;
  switch(level) {
    case "Level 1":
        example = "Level 1 has been clicked";
        gridSize = 2;
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
        gridSize = 25;
        break;
    default:
        example = "Unknown level";
        gridSize = 10;
}
    return <>
    <button onClick={() => onSelectLevel(example,gridSize)}>
      {level}
    </button>
    </>;
};

export default Level;