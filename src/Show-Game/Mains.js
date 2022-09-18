import React, { Component } from 'react';
import Display from './Display';
import Namone from './Namone';
import Result from './Result'


class Mains extends Component {

  constructor(props) {
    super(props);
    this.changeFarenheit = this.changeFarenheit.bind(this);
    this.changeCelcius = this.changeCelcius.bind(this);
    this.state = { celc: '', fahrn: '' };

  }
  changeCelcius(newCelc) {
    var cTemp = newCelc
    var cToFahr = cTemp * 9 / 5 + 32;
    console.log("ddddddd",cToFahr)
    this.setState({ fahrn: cToFahr,celc:cTemp });
    // this.setState({ fahrn: cToFahr });

    
  }
  changeFarenheit(newFahrn) {
    console.log('dddd',newFahrn )
    var fTemp = newFahrn;
    var fToCel = (fTemp - 32) * 5 / 9;
    this.setState({ celc: fToCel, fahrn: fTemp });
  }

  render() {
   
    
    return (
      <div>
        <Namone text={this.state.celc} changeCelcius={this.changeCelcius} />
        <Display text={this.state.fahrn}  changeFarenheit={this.changeFarenheit} />
        {/* <Result text={`${this.state.celc} ${this.state.fahrn}`}  /> */}
        
      </div>

    );
  }
}

export default Mains;