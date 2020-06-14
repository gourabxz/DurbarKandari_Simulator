import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Boot from './Pages/Boot';
function Main(){
    let hello = "Hello React"

    return(
    <div>
        <Boot />
    </div>
    )
}

ReactDOM.render(<Main />,document.getElementById('root'))

