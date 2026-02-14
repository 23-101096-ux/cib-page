import React from 'react';
import './Care.css';

import noone from '../assets/noone.png';
import nootwo from '../assets/nootwo.png';
import noothree from '../assets/noothree.png';

const Care = () => {
    return (
        <section className="care-section">
            <div className="care-container">
                <header className="care-header">
                    <h5>WE CARE</h5>
                    <h2>Our dedicated team is committed to meeting your needs</h2>
                </header>

                <div className="care-grid">
                    {/* Card 1: Online */}
                    <div className="care-card">
                        <div className="care-icon">
                            <img src={noone} alt="Online" />
                        </div>
                        <div className="care-content">
                            <h3>Online</h3>
                            <p>Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media.</p>
                        </div>
                    </div>

                    {/* Card 2: On the phone */}
                    <div className="care-card">
                        <div className="care-icon">
                            <img src={nootwo} alt="On the phone" />
                        </div>
                        <div className="care-content">
                            <h3>On the phone</h3>
                            <p>For support, including emergencies such as cards closure or immediate critical feedback.</p>
                        </div>
                    </div>

                    {/* Card 3: In branch */}
                    <div className="care-card">
                        <div className="care-icon">
                            <img src={noothree} alt="In branch" />
                        </div>
                        <div className="care-content">
                            <h3>In branch</h3>
                            <p>Our trained team of tellers and relationship managers are here to help you get the service you need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Care;