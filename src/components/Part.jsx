import React from 'react';
import './Part.css';

// Import your images here
import Onee from '../assets/onee.png'; 
import Twoo from '../assets/twoo.png';
import Threee from '../assets/threee.png';

const Part = () => {
    return (
        <section className="part-section">
            <div className="part-container">
                <header className="part-header">
                    <h5>SUSTAINABLE FINANCE</h5>
                    <h2>Sustainability is an integral part of the way we work</h2>
                </header>

                <div className="part-grid">
                    {/* Item One */}
                    <div className="part-item">
                        <div className="logo-box">
                             <img src={Onee} alt="S&P/EGX ESG Index" />
                        </div>
                        <h4>S&P/EGX ESG Index</h4>
                    </div>

                    {/* Item Two */}
                    <div className="part-item">
                        <div className="logo-box">
                             <img src={Twoo} alt="Bloomberg Gender Equality Index" />
                        </div>
                        <h4>Bloomberg Gender Equality Index</h4>
                    </div>

                    {/* Item Three */}
                    <div className="part-item">
                        <div className="logo-box">
                             <img src={Threee} alt="FTSE4Good Index" />
                        </div>
                        <h4>FTSE4Good Index</h4>
                    </div>
                </div>

                <div className="part-footer">
                    <button className="part-btn">Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default Part;