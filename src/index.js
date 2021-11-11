import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { json } from "d3-fetch"
import CountyLevel from './components/CountyLevel/CountyLevel';
import StateLevel from './components/StateLevel/StateLevel';

import "./styles.css";

function App() {
    const [options, setOptions] = useState([])
    const [selections, setSelections] = useState({level: "", degree: ""})

    useEffect(() => {
        json("/us_employment_totals_by_degree.json").then(stats => {
          let all_degree_fields = stats.map(stat => stat["Field of Degree"])
          let unique_degree_fields = [...new Set(all_degree_fields)]
          setOptions(unique_degree_fields)
        });
      }, []);

    return (
        <>
            <select onChange={e => setSelections({...selections, level: e.target.value})}>
                <option value="">Select Geographic Level</option>
                <option value="County">County Level</option>
                <option value="State">State Level</option>
            </select>
            <select onChange={e => setSelections({...selections, degree: e.target.value.trim()})}>
                <option value="">Select Field of Degree</option>
                {options.map(option => <option key={options.indexOf(option)} value={option}>{option}</option>)}
            </select>
            {selections.level === "State" && selections.degree !== "" ?
                <div className="appWrapper">
                {/* <CountyLevel /> */}
                    <StateLevel degree={selections.degree} />
                </div>
            : null}
        </>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);
