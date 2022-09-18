import React, { Component } from "react";
import NumberFormat from "react-number-format";
class ResultComponent extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
}

onChange (e){
    this.props.onChange(e.target.value);
}

  render() {
    // let { result } = this.props;
    return (
      <div className="result">
        <input
          className="input1"
          id="display"
          // dir="rtl"
          value={`${this.props.result}`}
          style={{ textAlign: "right" }}
          autoFocus="autofocus"
          name="text"
            onChange={this.onChange}
          // readOnly
        />{" "}
        {/* <input type="text"  class="number-separator" placeholder="Enter Your Number Here..."></input> */}{" "}
        {/* <NumberFormat thousandSeparator={true} thousandsGroupStyle="lakh"  value={result}/> */}{" "}
      </div>
    );
  }
}

export default ResultComponent;
