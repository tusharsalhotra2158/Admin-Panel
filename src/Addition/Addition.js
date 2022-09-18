import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/navbar.css'

function Addition() {

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");

    const [total, setTotal] = useState(0);

    function calculateTotal(e) {
        e.preventDefault();
        
        var check = e.target.value
        if (check === "add") {
            return setTotal(number1 + number2);
        } else if (check === "sub") {
            return setTotal(number1 - number2);
        } else if (check === "divid") {
            return setTotal(number1 / number2)
        } else if (check === "mult") {
            return setTotal(number1 * number2)
        } else if (check === "percent") {
            return setTotal(number1 % number2)
        } else if (check === "clear") {
            setNumber1("")
            setNumber2("")
            setTotal(0)
        } if (check === NaN) {
            return null;
        } if (check === "one" ){
            return setNumber1('')
        }
    }


    return (

        <div className="App">

            <h1>Adding Two Numbers</h1>
            <div className="Border-box">
                <div className="head">
                    <h2>{total}</h2>
                </div>
                <div className="number-inputs">

                    <input className="fill" value={number1} onChange={(evt) => setNumber1(+evt.target.value)} />
                    <input className="fill" value={number2} onChange={(evt) => setNumber2(+evt.target.value)} />

                </div>
                <div className="buttons" >
                    <div className="rows">
                    <Button className="dark"  variant="secondary" >(</Button>{' '}
                    <Button className="dark" variant="secondary">)</Button>
                    <Button className="dark" variant="secondary" value={"percent"} onClick={calculateTotal}> % </Button>
                    <Button className="dark"  variant="secondary" value={"clear"} onClick={calculateTotal}> CLEAR </Button>
                    </div>
                    <br/>
                    <div className="rows">
                    <Button className="dark" variant="light">7</Button>
                    <Button className="dark" variant="light">8</Button>
                    <Button className="dark" variant="light">9</Button>
                    <Button className="dark" variant="secondary" value={"divid"} onClick={calculateTotal}> DIVIDE </Button>
                    </div>
                    <br />
                    <div className="rows">
                    <Button className="dark" variant="light">4</Button>
                    <Button className="dark" variant="light">5</Button>
                    <Button className="dark" variant="light">6</Button>
                    <Button className="dark" variant="secondary" value={"mult"} onClick={calculateTotal}> MULTIPLY </Button>
                    </div>
                    <br/>
                    <div className="rows">
                    <Button className="dark" value={"one"} variant="light">1</Button>
                    <Button className="dark" variant="light">2</Button>
                    <Button className="dark" variant="light">3</Button>
                    <Button className="dark" variant="secondary" value={"sub"} onClick={calculateTotal}> SUBTRACT </Button>
                    </div>
                    <br/>
                    <div className="rows">
                    <Button className="dark" variant="light">0</Button>
                    <Button className="dark" variant="light">.</Button>
                    <Button className="dark" variant="light">=</Button>
                    <Button className="dark" variant="secondary" value={"add"} onClick={calculateTotal}>ADD</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Addition;



