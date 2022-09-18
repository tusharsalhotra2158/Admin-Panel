import React, { Component } from 'react';
import Input from './Input';
import Store from './Store'

class Action extends Component {

    constructor(props) {
        super(props);
        this.handleFunction = this.handleFunction.bind(this);
        this.state = { number: 0 }
    }

    handleFunction(newNumber) {
      this.setState({ number: 1 })
      
    }
    
    render() {
        return (
            <div>
                <Store text={this.state.number} handleFunction={this.handleFunction} />
                <Input text={this.state.number}  />
            </div>
        );
    }
}
export default Action;