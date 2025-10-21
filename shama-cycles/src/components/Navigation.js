import React from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = ['Home', 'About', 'Bikes', 'Services', 'Community', 'Our Race Team', 'Contact Us'];
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
            <img 
              src="https://via.placeholder.com/60x60/e5e5e5/666?text=SHAMA" 
              alt="Shama Cycles Logo" 
              className="logo"
            />
          </div>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`nav-link ${currentPage === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="mobile-menu">
            <button className="menu-button">
              <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;