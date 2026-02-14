import React from 'react';
import './Awards.css';


import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';

const Awards = () => {
    return (
        <section className="awards-section">
            <div className="awards-container">
                <header className="awards-header">
                    <h5>AWARDS</h5>
                    <h2>CIB's integrity and quality are recognized internationally</h2>
                </header>

                <div className="awards-grid">
                
            
                    <div className="award-item">
                        <img src={first} alt="Best Private Bank in Egypt" />
                        <h3>Best Private Bank in Egypt</h3>
                        <p>Global Finance - 2023</p>
                    </div>

              
                    <div className="award-item">
                        <img src={second} alt="Best Mergers & Acquisitions Deal in MENA" />
                        <h3>Best Mergers & Acquisitions Deal in MENA</h3>
                        <p>EMEA Finance - 2023</p>
                    </div>

                 
                    <div className="award-item">
                        <img src={third} alt="Best Bank in Egypt" />
                        <h3>Best Bank in Egypt</h3>
                        <p>Euromoney - 2023</p>
                    </div>
                </div>

                <div className="awards-footer">
                    <button className="awards-btn">See all our awards</button>
                </div>
            </div>
        </section>
    );
}

export default Awards;