import React from "react";


interface LevelProps {
  level: string;
  onSelectLevel: (level: string) => void;
};


const Level: React.FC<LevelProps> = ({level, onSelectLevel}) => {
    return <>
    <button onClick={() => onSelectLevel(level)}>
      {level}
    </button>
    </>;
};

export default Level;