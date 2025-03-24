import React from "react";

interface LevelProps {
  level: string;
  onSelectLevel: (level: string, gridSize: number, boardString: string) => void;
};

//Wanted to open the file from a text file, but for now settle as hardcoded
const Level: React.FC<LevelProps> = ({level, onSelectLevel}) => {
  let example: string;
  let boardString: string;
  let gridSize: number;
  switch(level) {
    case "Level 1":
        example = "p7-e1";
        boardString = "32 43\n62\n04\n20 34\n23 46";
        gridSize = 7;
        break;
    case "Level 2":
        example = "p7-e2";
        boardString = "33 46\n30 62\n034 20 36\n63";
        gridSize = 7;
        break;
    case "Level 3":
        example = "p10-e1";
        boardString = "017 19 20 424 928\n25 5457 79\n45\n23 37 746 80\n62";
        gridSize = 10;
        break;
    case "Level 4":
        example = "p10-e2";
        boardString="0059 17 21459 427 529 7058 90479\n02\n74\n57\n40 82"
        gridSize = 10;
        break;
    case "Level 5":
        example = "p14-e1";
        boardString = "013 11D 2125BD 36 5B 63467AD 7036C 82 96 A07 B02BC C026C DB\n1B 37D 47 5A 77 A68\n02 17C 79A B8 C1 DAC\n06 35 83 D7\n61"
        gridSize = 14;
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