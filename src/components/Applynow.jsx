import React, { Component } from 'react';
import './Applynow.css'; 

const Applynow = () => {
    return ( 
<section className="apply-section">
      {/* Top Tab Navigation */}
      <ul className="tab-menu">
        <li><a href="#apply" className="active-tab">Apply Online</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#blog">Blog Articles</a></li>
        <li><a href="#international">CIB International</a></li>
        <li><a href="#sustainable">Sustainable Finance</a></li>
        <li><a href="#awards">Awards</a></li>
      </ul>

      {/* Main Content Area */}
      <div className="apply-content">
        <p className="subtitle">APPLY ONLINE</p>
        <h2 className="main-title">Apply online now for cards and loans with ease!</h2>

        {/* Cards Container */}
        <div className="cards-container">
          
          {/* Card 1 */}
          <div className="apply-card">
            <div className="icon-circle">
              
              🏦
            </div>
            <h3>Apply for a New<br/>Account</h3>
          </div>

          {/* Card 2 */}
          <div className="apply-card">
            <div className="icon-circle">
              💳
            </div>
            <h3>Apply for a card</h3>
          </div>

          {/* Card 3 */}
          <div className="apply-card">
            <div className="icon-circle">
              📄
            </div>
            <h3>Apply for a loan or<br/>overdraft</h3>
          </div>

        </div>
      </div>
    </section>
    
     );
}
 
export default Applynow;