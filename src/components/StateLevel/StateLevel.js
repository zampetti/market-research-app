import React, { useState } from 'react'
import StateMap from './StateMap'
import StateInfo from './StateInfo';

import "../../styles.css";

const StateLevel = ({degree}) => {
    const [selection, setSelection] = useState("")
    
    const selectionCallback = (data) => {
        setSelection(data)
    }

    return (
        <>
            <h1>State Level</h1>
            <div className="mapDiv">
                <StateMap selection={selectionCallback} degree={degree} />
            </div>
            <div className="infoDiv">
                <StateInfo selection={selection} />
            </div>
        </>
    )
}

export default StateLevel;
