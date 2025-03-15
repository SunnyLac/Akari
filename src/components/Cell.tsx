import React, {useState} from 'react';

import '../App.css';

interface CellProps {
    index: number;
    icon: string;
    isClickable: boolean;
};

const Cell: React.FC<CellProps> = ({index, icon , isClickable}) => {
    const [hasbeenClicked, click] = useState(false);
    return <>
    <button
    onClick={()=>{click(!hasbeenClicked)}}
    disabled={!isClickable}
    className={hasbeenClicked ? "red" : "blue"}
    >
        {}
    </button>
    </>;
};

export default Cell;