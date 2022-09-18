import React, {Component} from 'react';
import '../styles/navbar.css'
class Navbar extends Component{
    render () {
        
        return (
      <div> 
    <ul className="guts">
  <li className="bull" ><a  href="#home" style={{color: "white"}} >Home</a></li>
  <li className="bull" ><a href="#news" style={{color: "white"}}>News</a></li>
  <li className="bull"><a href="#contact" style={{color: "white"}}>Contact</a></li>
  <li className="bull"><a href="#about" style={{color: "white"}}>About</a></li>
  <li className="bull"><a href="#about" className="login" >Login</a></li>
   </ul>
      </div> 
     
         );
    }
}

export default Navbar;
