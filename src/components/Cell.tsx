import React, {useState} from 'react';

import '../App.css';

interface CellProps {
    icon: string;
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

const Cell: React.FC<CellProps> = ({icon}) => {
    const [hasbeenClicked, click] = useState(false);

    let isClickable:boolean = icon === "_";
    return <>
    <button
    onClick={()=>{isClickable && click(!hasbeenClicked)}}
    className={hasbeenClicked ? "yellow" : isClickable ? "grey" : "black"}
    >
        {getIcon(icon)}
    </button>
    </>;
};

export default Cell;