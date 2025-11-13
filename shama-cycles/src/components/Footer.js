import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = ({ setCurrentPage }) => {
  const navItems = ['About', 'Bikes', 'Gear', 'Bike Fittings', 'Bike Services', 'Our Race Team', 'Community', 'Contact Us'];
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src="shama_logo.png" 
              alt="Shama Cycles Logo" 
              className="footer-logo"
            />
            <div className="copyright">
              <p>Copyright © 2025</p>
            </div>
          </div>
          
          <div className="footer-links">
            {navItems.map((item, index) => (
              <React.Fragment key={item}>
                <a className="footer-link" onClick={() => setCurrentPage(item)}>
                  {item}
                </a>
                {index < navItems.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          
          <div className="social-links">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/p/Shama-Cycles-100063533020164/" className="social-link facebook">
              <Facebook size={24} fill="currentColor" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shamacycles/?hl=en" className="social-link instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-address">
          <p>5200 Richmond Rd #150, Houston, TX 77056</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;