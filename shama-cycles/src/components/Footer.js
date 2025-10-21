import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const navItems = ['Home', 'About', 'Bikes', 'Services', 'Community', 'Our Race Team'];
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img 
              src="https://via.placeholder.com/60x60/e5e5e5/666?text=SHAMA" 
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
                <a href="#" className="footer-link">
                  {item}
                </a>
                {index < navItems.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <Facebook size={24} fill="currentColor" />
            </a>
            <a href="#" className="social-link instagram">
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