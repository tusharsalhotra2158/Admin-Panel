import React, { Component } from 'react';


class Namone extends Component {

    constructor(props) {
        super(props);
        this.changeCelcius = this.changeCelcius.bind(this);
    }

    changeCelcius(e) {
        this.props.changeCelcius(e.target.value)
    }

    render() {

        return (

            <div style={{ textAlign: 'center' }} >
                <h1> Temperature Change </h1>
                {console.log("---tesss", this.props)}
                Celcius: <input value={this.props.text} onChange={this.changeCelcius} />
            </div>
        );
    }

}
export default Namone;