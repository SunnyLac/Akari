import React, {useState} from 'react';

import { ICONMAP } from '../helper/helper';
import '../App.css';

interface CellProps {
    icon: string;
    rowIdx: number;
    colIdx: number;
    updateBoard: (rowIdx: number, colIdx: number, new_icon: string) => void;
};



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