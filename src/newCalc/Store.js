import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Store extends Component {
    constructor(props) {
        super(props);
        this.handleFunction = this.handleFunction.bind(this);
    }
    handleFunction (e){
       this.props.handleFunction(e.target.value);
       this.props.handleFunction(e.target.tageName);
       
    }
    render() {
        return (

            <div>
                <Button value={this.props.text} variant="secondary" onClick={this.handleFunction}>1</Button>
                <Button value={this.props.text} variant="secondary" onClick={this.handleFunction}>2</Button>

            </div>
        );
    }
}

export default Store;