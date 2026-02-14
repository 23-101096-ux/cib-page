import React from 'react';
import './Sus.css'; 
import Imgg from '../assets/men.png'; 

const Sus = () => {
    return ( 
        <section className="cib-section-bg">
            <div className="cib-main-container">
                <div className="cib-banner-frame">
                    <img src={Imgg} alt="CIB International" className="cib-hero-img" />
                    
                    <div className="cib-floating-card">
                        <div className="cib-orange-top"></div>
                        <h3 className="cib-title">CIB on an international scale</h3>
                        <p className="cib-text">Learn more about CIB's presence outside of Egypt</p>
                        <button className="cib-btn">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Sus;