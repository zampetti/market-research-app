import React, { useState } from 'react'
import CountyUnemploymentChoropleth from './CountyMap'
import CountyInfo from './CountyInfo';

import "../../styles.css";

const CountyLevel = () => {
    const [selection, setSelection] = useState("")
    
    const selectionCallback = (data) => {
        setSelection(data)
    }

    return (
        <>
            <h1>County Level</h1>
            <div className="mapDiv">
                <CountyUnemploymentChoropleth selection={selectionCallback} />
            </div>
            <div className="infoDiv">
                <CountyInfo selection={selection} />
            </div>
        </>
    )
}

export default CountyLevel;
