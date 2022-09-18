import React, { Component } from 'react';
import B from './B';
import C from './C';
import D from './D'

class A extends Component {

    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = { text: '' , name: ''};
    }
  

    handleChangeText(newText) {
        this.setState({ text: newText });
    }
    handleTextChange(newName) {
        this.setState({ name : newName });
    }

    render() {
        return (
          <div>
            <B text={this.state.text} handleChangeText={this.handleChangeText} />
            <D text={this.state.name} handleTextChange= {this.handleTextChange} />
            <C text={`${this.state.text} ${this.state.name}`}  />
            </div>
        );
    }
}

export default A;


