import React, { Component } from "react";

class Fetch extends Component {
  constructor() {
    super();
    this.state = { users: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      
  } 
  render() {
    return (
      <div>
        <div>
          <button> </button>
          <p> {this.state.users} </p>{" "}
        </div>
        
      </div>
    );
  }
}
export default Fetch;
