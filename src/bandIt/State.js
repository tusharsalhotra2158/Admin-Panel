import React, { useState } from 'react';
import '../styles/navbar.css'

function State () {
    const [count, setCount] = useState(0);
    // const count = useState[0]
    // const setCount = useState[1]
    
    return (
    <div className="Increment"> 
      <p>  {count}  </p>
     <button onClick={() => setCount(count + 1)} > Click </button>
    <button onClick= {() => setCount(count - 1)} > Decrement</button>
    </div>
    );
}
 export default State;
