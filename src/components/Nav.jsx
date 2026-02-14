import React, { Component } from 'react';
import './Nav.css';
import logoImage from '../assets/Image.png';

const  Nav = () => {
    return ( 
        <nav className="navbar">
        <div className="logo-container">
     <img src={logoImage} alt="CIB Logo" className="logo" />
        </div>
        
        <ul className="nav-links">

          <li><a href="#about" className="active">About Us</a></li>
          <li><a href="#investor">Investor Relations</a></li>
          <li><a href="#responsible">Responsible Banking</a></li>
          <li><a href="#newsroom">Newsroom</a></li>
          <li><a href="#learning">Learning Center</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#others">Others</a></li>
        </ul>
      </nav>
     );
}
 
export default Nav;