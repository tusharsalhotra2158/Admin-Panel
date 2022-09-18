import React from "react";
import { Button } from "react-bootstrap";
import "../styles/navbar.css";
const operators = ["+", "-", "/", "*", "%"];

class Simplify extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      result: [],
      prevResult: [],
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
      this.setState((prevState) => this.calculate(prevState));
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
        prevResult: [...prevState.prevResult, +text],
      };
    } catch (event) {
      return {
        text: "error",
        result: "error",
        prevResult: "error",
      };
    }
  }
  render() {
    return (
      <div>
        <div className="result" style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Calculator</h1>
          <input
            style={{ height: "100px", width: "300px", font: "20px" }}
            name="text"
            autoFocus="autofocus"
            value={this.state.text}
            onChange={this.onChange}
            className="input1"
          />
        </div>

        <div className="container">

          <div className="container-box">
            <div className="d-flex justify-content-center">
              <Button
                className="dark1"
                variant="secondary"
                name="text"
                value="("
                onClick={this.handleChange}
              >
                (
              </Button>
              <Button
                className="dark1"
                variant="secondary"
                name="text"
                value="CE"
                onClick={this.handleChange}
              >
                CE
              </Button>
              <Button
                className="dark1"
                variant="secondary"
                name="text"
                value=")"
                onClick={this.handleChange}
              >
                )
              </Button>
              <Button
                className="dark1"
                variant="warning"
                name="text"
                value="C"
                id="clear"
                onClick={this.handleChange}
              >
                C
              </Button>
              <br />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <Button
                className="dark"
                variant="light"
                name="text"
                value="1"
                onClick={this.handleChange}
              >
                1
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="2"
                onClick={this.handleChange}
              >
                2
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="3"
                onClick={this.handleChange}
              >
                3
              </Button>
              <Button
                className="dark"
                variant="warning"
                name="text"
                value="+"
                id="plus"
                onClick={this.handleChange}
              >
                +
              </Button>
              <br />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <Button
                className="dark"
                variant="light"
                name="text"
                value="4"
                onClick={this.handleChange}
              >
                4
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="5"
                onClick={this.handleChange}
              >
                5
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="6"
                onCli
                ck={this.handleChange}
              >
                6
              </Button>
              <Button
                className="dark"
                variant="warning"
                name="text"
                value="-"
                id="subtract"
                onClick={this.handleChange}
              >
                -
              </Button>
              <br />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <Button
                className="dark"
                variant="light"
                name="text"
                value="7"
                onClick={this.handleChange}
              >
                7
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="8"
                onClick={this.handleChange}
              >
                8
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="9"
                onClick={this.handleChange}
              >
                9
              </Button>
              <Button
                className="dark"
                variant="warning"
                id="multiply"
                name="text"
                value="*"
                onClick={this.handleChange}
              >
                x
              </Button>
              <br />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <Button
                className="dark"
                variant="light"
                name="text"
                value="."
                onClick={this.handleChange}
              >
                .
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="0"
                onClick={this.handleChange}
              >
                0
              </Button>
              <Button
                className="dark"
                variant="light"
                name="text"
                value="="
                onClick={this.handleChange}
              >
                =
              </Button>
              <Button
                className="dark"
                variant="warning"
                name="text"
                value="/"
                id="divide"
                onClick={this.handleChange}
              >
                ÷
              </Button>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Simplify;
