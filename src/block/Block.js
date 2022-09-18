import React, { useState } from 'react';
import '../styles/navbar.css'

function Block() {

    const [text, setText] = useState("Enter Text");

    function diplayHandle(e) {
        setText(e.target.value)
    }
    return (
        <div className="create">
            <div className="hd1">
                <h1> {text} </h1>
            </div>
            <div>
                <input className="show" onChange={diplayHandle} placeholder="Enter Text" />
            </div>

        </div>


    );
}


export default Block;
