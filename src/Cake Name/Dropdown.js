import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Radio from '../Size/Radio';
import "./dropdown.css";

function Dropdown() {
  const [fruit, setFruit] = useState("Select")
  function handleClick(e) {
    setFruit(e.target.value);
  }

  return (<>
    <div className="dropdown">
      <div className="select">
        <select id="Items">
          <option onClick={function (e) { handleClick(e) }} value="Select">Select</option>
          <option onClick={function (e) { handleClick(e) }} value="Mango">Mango</option>
          <option onClick={function (e) { handleClick(e) }} value="Banana">Banana</option>
          <option onClick={function (e) { handleClick(e) }} value="Orange">Orange</option>
          <option onClick={function (e) { handleClick(e) }} value="Pumpkin">Pumpkin</option>
          <option onClick={function (e) { handleClick(e) }} value="Tomato">Tomato</option>
        </select>
        <span className="focus"></span>
      </div>
    </div>
    <Radio fruit={fruit} />
  </>
  )
}

export default Dropdown