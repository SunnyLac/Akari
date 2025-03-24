import React, {useState} from 'react';

import '../App.css';

interface CellProps {
    icon: string;
    rowIdx: number;
    colIdx: number;
    updateBoard: (rowIdx: number, colIdx: number, new_icon: string) => void;
};

const ICONMAP: Record<string, string> = {
    "bulb": "💡",
    "_": "",
    "lit": "",
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4"
}

function getIcon(key: string){
    return ICONMAP[key];
}

const Cell: React.FC<CellProps> = ({icon, rowIdx, colIdx, updateBoard}) => {
    const [hasbeenClicked, click] = useState(false);
    const isClickable:boolean = icon === "_" || icon === "bulb" || icon === "lit";
    const isLit: boolean = icon === "lit";
    return <>
    <button
    onClick={()=>{if (isClickable){
        click(!hasbeenClicked);
        updateBoard(rowIdx,colIdx,hasbeenClicked ? "lit" : "bulb");
    }}}
    className={hasbeenClicked || isLit ? "yellow" : isClickable ? "grey" : "black"}
    >
        {getIcon(icon)}
    </button>
    </>;
};

export default Cell;