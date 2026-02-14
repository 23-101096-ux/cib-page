import React, { Component } from 'react';
import './Header.css'; 
import Discoverbtn from './Discoverbtn';


const Header = () => {
    return (  
        <header className="hero-section">
      <div className="top-orange-bar"></div>

      <div className="hero-content">
        <h1>CIB</h1>
        <p>Delivering value to our clients, our<br />community and our shareholders</p>
        <Discoverbtn />
      </div>
    </header>
    );
}
 
export default Header;