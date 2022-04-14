import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Decoration from '../Decoration/Decoration';
import "./radio.css"
function Radio({ fruit }) {
    const [size, setSize] = useState(null);
    useEffect(() => {
        const input = document.getElementsByName("6");
        if (fruit === "Select") {
            input[0].disabled = true;
            input[1].disabled = true;
            input[2].disabled = true;
        }
        else {
            input[0].disabled = false;
            input[1].disabled = false;
            input[2].disabled = false;
        }
    }, [fruit])

    function handleChange(e) {
        setSize(e.target.value);
    }
    return (
        <div id="container">
            <input type="radio" name="6" value="6" onChange={function (e) { handleChange(e) }} /><label forhtml="html">6 inch</label>
            <input type="radio" name="6" value="8" onChange={function (e) { handleChange(e) }} /><label forhtml="html">8 inch</label>
            <input type="radio" name="6" value="13" onChange={function (e) { handleChange(e) }} /><label forhtml="html">13 inch</label>
            {fruit !== "Pumpkin" ?
                fruit !== "Tomato" ? <Decoration size={size} /> : null : null
            }
        </div>
    )
}

export default Radio