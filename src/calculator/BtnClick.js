
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/navbar.css'

class KeyPadComponent extends Component {

    render() {
        return (

            <div className="container">
                <div className="container-box" >
                    <div className="d-flex justify-content-center">
                        <Button className="dark1" variant="secondary" name="(" onClick={e => this.props.onClick(e.target.name)}>(</Button>
                        <Button className="dark1" variant="secondary" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                        <Button className="dark1" variant="secondary" name=")" onClick={e => this.props.onClick(e.target.name)}>)</Button>
                        <Button className="dark1" variant="warning" name="C" id="clear" onClick={e => this.props.onClick(e.target.name)}>C</Button><br />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button className="dark" variant="light" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                        <Button className="dark" variant="light" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                        <Button className="dark" variant="light" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                        <Button className="dark" variant="warning" name="+" id="plus" onClick={e => this.props.onClick(e.target.name)}>+</Button><br />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button className="dark" variant="light" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                        <Button className="dark" variant="light" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                        <Button className="dark" variant="light" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                        <Button className="dark" variant="warning" name="-" id="subtract" onClick={e => this.props.onClick(e.target.name)}>-</Button><br />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button className="dark" variant="light" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                        <Button className="dark" variant="light" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                        <Button className="dark" variant="light" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                        <Button className="dark" variant="warning" id="multiply" name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br />
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <Button className="dark" variant="light" name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                        <Button className="dark" variant="light" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                        <Button className="dark" variant="light" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                        <Button className="dark" variant="warning" name="/" id="divide" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br />
                    </div>
                </div>
            </div>
        );
    }
}


export default KeyPadComponent;