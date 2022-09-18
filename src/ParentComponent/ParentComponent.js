import React, { Component } from "react";
import Child from "../Child/Child";

class ParentComponent extends Component {
  render() {
    return <Child name="First Child" />;
  }
}

export default ParentComponent;
