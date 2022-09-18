import React from "react";
// import "./style.css";

const operators = ["+", "-", "/", "*", "%"];

class Calcy extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      result: [],
      prevResult: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    let text = this.state.text;
    let lastChar = text.charAt(text.length - 1);
    const isOperator = operators.indexOf(value) !== -1;
    if (value === "=") {
      this.setState(prevState => this.calculate(prevState));
    } else if (value === "CE") {
      this.setState({ text: text.slice(0, -1) });
    } else if (value === "C") {
      this.setState({ text: "" });
    } else if (isOperator && operators.indexOf(lastChar) !== -1) {
      text = text.substr(0, text.length - 1) + value;
      this.setState({ [name]: text });
    } else {
      this.setState({ [name]: text + value });
    }
  }
  onChange({ target }) {
    this.setState({ text: target.value });
  }
  calculate(prevState) {
    try {
      const text = (eval(this.state.text) || "") + "";
      return {
        text,
        result: [...prevState.result, this.state.text + "   "],
        prevResult: [...prevState.prevResult, +text]
      };
    } catch (event) {
      return {
        text: "error",
        result: "error",
        prevResult: "error"
      };
    }
  }
  render() {
    const buttons = [
      "+",
      "-",
      "*",
      "/",
      "%",
      "(",
      ")",
      "=",
      "1",
      "2",
      "3",
      "CE",
      "4",
      "5",
      "6",
      "C",
      "7",
      "8",
      "9",
      "~",
      ".",
      "0"
    ];
    return (
      <div>
        <div className="resultbar">
          <input
            style={{ height: "30px", width: "200px", font: "20px" }}
            name="text"
            autoFocus="autofocus"
            value={this.state.text}
            onChange={this.onChange}
          />
        </div>

        <div className="history">
          <h2>History</h2>
          <h3 style={{ color: "red" }}>{this.state.result} </h3>
          <p>{this.state.prevResult}</p>
        </div>
        <div className="button">
          {buttons.map(x => {
            return (
              <button name="text" value={x} onClick={this.handleChange}>
                {x}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Calcy;