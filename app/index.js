import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import TestPage from './Pages/TestPage';

function Clock(){
    let hello = "Hello React"
    return(
    <div>
        <h1>{hello}</h1>
    </div>
    )
}

ReactDOM.render(<Clock />,document.getElementById('root'))

