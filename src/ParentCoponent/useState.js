import React, {Component} from 'react';
import Tick from '../Child/Child'

class ParentComponent extends Component {    
    render() {    
        return (        
           <h1> <ChildComponent name="First Child" />  </h1>   
        );  
    }
}

export default ParentComponent;

