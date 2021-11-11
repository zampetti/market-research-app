import React, { useEffect, useState } from 'react'
import { ResponsivePie } from '@nivo/pie'

const StateInfo = ({selection}) => {
    const [pieChartData, setPieChartData] = useState([])

    useEffect(() => {
        if (selection) {
            var obj = [{
                "id": "Employed",
                "label": "Employed",
                "value": selection["Employed"],
                "color": "#17E870"
            },
            {
                "id": "Unemployed",
                "label": "Unemployed",
                "value": selection["Unemployed"],
                "color": "red"
              },
              {
                "id": "Armed Forces",
                "label": "Armed Forces",
                "value": selection["Armed Forces"],
                "color": "yellow"
              },
              {
                "id": "Not in Labor Force",
                "label": "Not in Labor Force",
                "value": selection["Not in Labor Force"],
                "color": "orange"
              }]
              setPieChartData(obj)
        }
        
    }, [selection])

    return (
        <div style={{padding:"2%"}}>
            <h2>{selection["Selected Geographies"]}</h2>
            <h3>{selection["Field of Degree"]}</h3>

            <div style={{height: "400px", width: "100%"}}>
                <ResponsivePie
                    data={pieChartData}
                    colors={{datum:'data.color'}}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                />
            </div>

            <hr />
            <div>
                <small><i>Source: U.S. Census Bureau, American Community Survey 5-Year Estimates (PUMS 2019)</i></small>
            </div>
            
        </div>
    )
}

export default StateInfo;
