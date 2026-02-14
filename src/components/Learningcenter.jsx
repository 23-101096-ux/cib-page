import React, { Component } from 'react';
import './Learningcenter.css'; 
import Img1 from '../assets/Figure [fig-container].png';
import Img2 from '../assets/Image [lozad].png';
import Img3 from '../assets/Div [aspect-wrapper].png';
import Viewbtn from './Viewbtn';

const  Learningcenter= () => {
    return ( 
        <section className="learning-section">
      
        {/* Section Header */}
        <div className="learning-header">
          <h2>Learning Center</h2>
          <p>Learn more about banking and your finances</p>
        </div>
  
        {/* Cards Container */}
        <div className="learning-cards-container">
          
          {/* Card 1 */}
          <div className="learning-card">
            <img 
              src={Img1}
              alt="Couple moving into a new home" 
              className="card-image" 
            />
            <div className="card-content">
              <h3>Buying and making a home</h3>
              <p>Buying a home can be an emotional process, but it's important to approach it logically</p>
            </div>
            <div className="card-footer">
              <a href="#readmore">Read more</a>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="learning-card">
            <img 
              src={Img2}
              alt="Airplane at terminal" 
              className="card-image" 
            />
            <div className="card-content">
              <h3>Traveling on a budget</h3>
              <p>So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:</p>
            </div>
            <div className="card-footer">
              <a href="#readmore">Read more</a>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="learning-card">
            <img 
              src={Img3}
              alt="Graduating students" 
              className="card-image" 
            />
            <div className="card-content">
              <h3>University life tips</h3>
              <p>The impact of a good education can be transformative.</p>
            </div>
            <div className="card-footer">
              <a href="#readmore">Read more</a>
            </div>
          </div>
  
        </div>
  
        {/* View More Button at the bottom */}
   <Viewbtn />
      </section>
     );
}
 
export default Learningcenter;