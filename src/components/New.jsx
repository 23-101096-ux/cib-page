import React, { Component } from 'react';
import './New.css'; 
import Img4 from '../assets/img4.png';


const  New= () => {
    return ( 
        <section className="news-section">
      <h2 className="news-title">News</h2>

      <div className="news-container">
        <hr className="news-divider" />

      
        <div className="news-item">
          <img 
            src={Img4} 
            alt="CIB Building" 
            className="news-image" 
          />
          <div className="news-content">
            <span className="news-meta">
              08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion
            </span>
            <h3>Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</h3>
            <p>CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.</p>
          </div>
        </div>

        <hr className="news-divider" />

      
        <div className="news-item">
          <img 
            src={Img4}  
            alt="CIB Building" 
            className="news-image" 
          />
          <div className="news-content">
            <span className="news-meta">
              08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services
            </span>
            <h3>Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services</h3>
            <p>CIB, Egypt's leading and largest private-sector bank, has successfully completed its seventh securitization bond issuance for GlobalCorp Financial Services, worth EGP 2.3 billion.</p>
          </div>
        </div>

        <hr className="news-divider" />

     
        <div className="news-item">
          <img 
            src={Img4} 
            alt="CIB Building" 
            className="news-image" 
          />
          <div className="news-content">
            <span className="news-meta">
              21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations
            </span>
            <h3>Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations</h3>
            <p>CIB, Egypt's leading and largest private-sector bank is pleased to announce that its subsidiary, CIFC, has delivered remarkable results since its inception in April 2024.</p>
          </div>
        </div>

        <hr className="news-divider" />
      </div>

      <div className="news-action">
        <button className="view-all-btn">View All News</button>
      </div>
    </section>
     );
}
 
export default New;