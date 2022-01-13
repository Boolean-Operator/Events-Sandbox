import React, { Component } from "react";
import "../styles/ButtonList.css";



class Button extends Component {
  constructor(props) {
    super(props);
    this.handleSetColor = this.handleSetColor.bind(this);
  }
  handleSetColor(evt){
    console.log("INSIDE BUTTON HANDLESetColor")
    this.props.setColor(this.props.value);
  }
  render() {
    return (
      <button 
        style= {{backgroundColor: this.props.value}} 
        onClick={this.handleSetColor} >
          Click on me!
      </button>
    );
  }
}

export default Button;
