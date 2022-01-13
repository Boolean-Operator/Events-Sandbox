import React, { useState } from "react";
import "../styles/ButtonList.css";

function ButtonList(props) {
  
  const [color, setColor] = useState("thistle");
  const handleClick = (c) => {
    changeColor(c)
  }

  const changeColor = (newColor) => {
    console.log(`newColor is: ${newColor}`);
    setColor(newColor);
  }

  return (
    <div className="ButtonContainer">
      <h1>Button Hook List</h1>
      <div className='ButtonList' style={{ backgroundColor: color }}>
        {props.colors.map(c => {
          const colorObj = { backgroundColor: c };
          return (
            <button style={colorObj} onClick={() => handleClick(c)}>
              Click on me!
            </button>
          );
        })}
      </div>
    </div>
  );
}
ButtonList.defaultProps = {
  colors: ["#4682b4", "#eb4d4b", "#ba55d3", "#ff7f50"]
}

export default ButtonList;