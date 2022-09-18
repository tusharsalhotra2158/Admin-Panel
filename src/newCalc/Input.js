import React, { Component } from 'react';

class Input extends Component {
    constructor (props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <input value={this.props.text}   readOnly /> 
            </div>
        );
    }
}

export default Input;