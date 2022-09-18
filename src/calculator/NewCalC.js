import React, { Component } from "react";
import BtnClick from "./BtnClick";
import ResultComponent from "./ResultComponent";
// import Operator from './Operator';

const operators = ["+", "-", "/", "*", "%"];
class NewCalC extends Component {
  constructor() {
    super();
    this.state = { result: " " };
  }
  onChange({ target }) {
    this.setState({ result: target.value });
  }
  onClick = (button) => {
   
   if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "0",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{ color: "white" }}>Calculator</h1>
          <ResultComponent result={this.state.result} />
          <BtnClick onClick={this.onClick} />
          {/* <Operator onClick={this.onClick} /> */}
        </div>
      </div>
    );
  }
}

export default NewCalC;
