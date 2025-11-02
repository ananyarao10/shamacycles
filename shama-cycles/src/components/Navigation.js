import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  
  const navItems = ['About', 'Bikes', 'Gear'];
  const serviceItems = ['Bike Fittings', 'Bike Services'];
  const navItemsAfterServices = ['Our Race Team', 'Community', 'Contact Us'];
  
  const handleServiceClick = (service) => {
    setCurrentPage(service);
    setShowServicesDropdown(false);
  };
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
            <a onClick={() => setCurrentPage('Home')}>
              <img 
              src="shama_logo.png" 
              alt="Shama Cycles Logo" 
              className="logo"
            />
            </a>
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
            
            <div 
              className="dropdown-container"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button
                className={`nav-link ${serviceItems.includes(currentPage) ? 'active' : ''}`}
              >
                Services
                <svg 
                  className="dropdown-arrow" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="currentColor"
                >
                  <path d="M6 8L2 4h8L6 8z" />
                </svg>
              </button>
              
              {showServicesDropdown && (
                <div className="dropdown-menu">
                  {serviceItems.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceClick(service)}
                      className={`dropdown-item ${currentPage === service ? 'active' : ''}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navItemsAfterServices.map((item) => (
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