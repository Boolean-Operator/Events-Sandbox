import React, { Component } from "react";
import "../styles/ButtonList.css";

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#4682b4", "#eb4d4b", "#ba55d3", "#ff7f50"]
  };
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this)
    this.state = { color: "salmon" };
  }

  changeColor(newColor) {
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className="ButtonContainer">
        <h1>Button List</h1>
        <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
          {this.props.colors.map(c => {
            const colorObj = { backgroundColor: c };
            return (
              <button style={colorObj} onClick={this.changeColor.bind(this,c)}>
                Click on me!
              </button>
            );
          })};
        </div>
      </div>
    );
  }
}

export default ButtonList;
