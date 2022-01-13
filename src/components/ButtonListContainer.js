import React, { Component } from "react";
import "../styles/ButtonList.css";
import Button from './Button';

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#4682b4", "#eb4d4b", "#ba55d3", "#ff7f50"]
  };
  constructor(props) {
    super(props);
    this.state = { color: "rebeccapurple" };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newColor) {
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

  render() {
    let buttons = this.props.colors.map((c,idx) => 
      <Button key={idx} value={c} setColor={this.changeColor}/>
    );
    return (
      <div className="ButtonContainer">
        <h1>Button Container List</h1>
        <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
          {buttons}
        </div>
      </div>
    );
  }
}

export default ButtonList;
