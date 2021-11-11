import React, { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { json } from "d3-fetch"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/states-10m.json"

const StateMap = ({selection, degree}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    json("/us_employment_totals_by_degree.json").then(stats => {
      console.log("PRESELECTED: ", stats.filter(stat => stat["Selected Geographies"] === "Total "+degree))
      setData(stats)
    });
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s["Selected Geographies"] === geo.properties.name && s["Field of Degree"].trim() === degree);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                       fill: "#ECEFF1",
                       stroke: "#607D8B",
                       strokeWidth: 0.75,
                       outline: "none",
                    },
                    hover: {
                       fill: "#CFD8DC",
                       stroke: "#607D8B",
                       strokeWidth: 1,
                       outline: "none",
                    },
                    pressed: {
                       fill: "#FF5722",
                       stroke: "#607D8B",
                       strokeWidth: 1,
                       outline: "none",
                    }
                 }}
                  onClick={() => selection(cur)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default StateMap;
