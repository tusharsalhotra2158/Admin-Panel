import React, { Component } from 'react'


class Display extends Component {

    constructor(props) {
        super(props);
        this.changeFarenheit = this.changeFarenheit.bind(this);
    }

    changeFarenheit(evt) {
       this.props.changeFarenheit(evt.target.value);
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }} >
                
               Ferenheit: <input  value={this.props.text} onChange={this.changeFarenheit} />
                
            </div>
        );
    }
}
export default Display;