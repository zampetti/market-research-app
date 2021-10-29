import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CountyLevel from './components/CountyLevel/CountyLevel';
import StateLevel from './components/StateLevel/StateLevel';

import "./styles.css";

function App() {

    return (
        <div className="appWrapper">
           {/* <CountyLevel /> */}
           <StateLevel />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);
