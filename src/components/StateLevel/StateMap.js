import React, { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { json } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3.0.0/states-10m.json"

const StateMap = ({selection}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    json("/us_employment_totals_by_degree.json").then(stats => {
      setData(stats)
    });
  }, []);

  return (
    <>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s["Selected Geographies"] === geo.properties.name && s["Field of Degree"] === " General Agriculture");
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={"#240BB4"}
                //   onClick={() => selection(cur)}
                  onClick={() => console.log("STATE SELECTION: ", cur)}
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
