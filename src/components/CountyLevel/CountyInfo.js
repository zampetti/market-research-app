import React from 'react'

const CountyInfo = ({selection}) => {
    return (
        <div style={{padding:"2%"}}>
            <p>{selection.name}</p>
            <p>{selection.unemployment_rate !== undefined ? selection.unemployment_rate + " %" : null}</p>
        </div>
    )
}

export default CountyInfo;
