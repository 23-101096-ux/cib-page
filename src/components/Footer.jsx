import React from 'react';
import './Footer.css';

import logoImage from '../assets/Image.png';
import Logogoogle from '../assets/Icon-1.png';
import Logoapp from '../assets/Icon.png';
import face from '../assets/face.png';
import ig from '../assets/ig.png';
import inIcon from '../assets/in.png'; 
import youtube from '../assets/youtube.png';
import xxx from '../assets/xxx.png';
import wp from '../assets/wp.png';




const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-top-section">
                <div className="footer-container">
            
                    <div className="footer-brand">
                        <img src={logoImage} alt="CIB 50 Years" className="footer-main-logo" />
                    </div>

                
                    <div className="footer-links-grid">
                        <div className="link-column">
                            <a href="#">FAQs</a>
                            <a href="#">Learning Center</a>
                            <a href="#">Fees & Charges</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <div className="link-column">
                            <a href="#">Local</a>
                            <a href="#">Abroad</a>
                            <a href="#">Business</a>
                            <a href="#">Corporate</a>
                        </div>
                        <div className="link-column">
                            <a href="#">Careers</a>
                            <a href="#">Why CIB</a>
                            <a href="#">Email us</a>
                            <a href="#">System Status</a>
                        </div>
                    </div>

                
                    <div className="footer-apps">
                        <img src={Logogoogle} alt="Get it on Google Play" />
                        <img src={Logoapp} alt="Download on the App Store" />
                    </div>
                </div>
            </div>

            <div className="footer-bottom-section">
                <div className="footer-container bottom-flex">
                    <div className="legal-links">
                        <a href="#">CBE Approvals</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">User Agreements</a>
                    </div>
                    
                    <div className="social-icons">
                        <a href="#"><img src={face} alt="Facebook" /></a>
                        <a href="#"><img src={ig} alt="Instagram" /></a>
                        <a href="#"><img src={inIcon} alt="LinkedIn" /></a>
                        <a href="#"><img src={youtube} alt="YouTube" /></a>
                        <a href="#"><img src={xxx} alt="X" /></a>
                        <a href="#"><img src={wp} alt="WhatsApp" /></a>
                    </div>
                </div>
                <div className="copyright-bar">
                    <p>Copyright © 2025 Commercial International Bank</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;