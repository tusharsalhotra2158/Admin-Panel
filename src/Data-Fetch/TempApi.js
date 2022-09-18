import React, { Component } from "react";
import { Button } from "react-bootstrap";

class TempApi extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      person: " ",
      showMessage: false,
    };
  }
  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto/";
    const response = await fetch(url);
    const data = await response.json();
    const store = this.setState({ person: data.abilities[3], loading: false });
  }
  onButtonClickHandler = () => {
    this.setState({ showMessage: true });
  };
  onButtonClick = () => {
    this.setState({ showMessage: false });
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.state.loading || !this.state.person ? (
          <div> loading....</div>
        ) : (
          <div>
            <div style={{ color: "white"  }}>
              <div className = "border-box" >
                <input className="message" value={this.state.showMessage &&
                    `Name: ${this.state.person.ability.name}`} style={{  textAlign: "left" }} />
                  {" "}
          
                
                <input value = {this.state.showMessage &&
                    `Link: ${this.state.person.ability.url}`}  style={{  textAlign: "left", whiteSpace: "pre-wrap" }}  />
                  
                
              </div>
              <br />
              <div className = "d-flex justify-content-center "  >
                {" "}
                <Button name="check" onClick={this.onButtonClickHandler}>
                
                  {" "}
                  Display{" "}
                </Button>{" "}
                <Button  onClick={this.onButtonClick}> Delete  </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TempApi;
