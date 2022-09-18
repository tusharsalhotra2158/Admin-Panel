import React, { Component } from 'react';

class B extends Component {
    constructor(props) {
        super(props);
        this.handleChangeText = this.handleChangeText.bind(this);
    }
    
    handleChangeText (e){
        this.props.handleChangeText(e.target.value);
    }

    render() {
        return (

            <input  value={this.props.text} onChange={this.handleChangeText} />
        );
    }
}   
export default B;