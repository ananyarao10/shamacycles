import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">
            SHAMA CYCLES
          </h1>
          <div className="hero-underline"></div>
        </div>

        <div className="content-grid">
          <div className="left-column">
            <div className="text-content">
              <p className="tagline">A home away from home for bike lovers.</p>
              <p className="tagline">Personalized sales, bike fitting, and service.</p>
              <p className="description">
                Making every new bike sale, upgrade and service specific for the customer and their needs.
              </p>
              
              <button className="cta-button">
                <span className="arrow">→</span>
                <span>schedule a bike fit</span>
              </button>
            </div>
            
            <div className="image-placeholder"></div>
          </div>
          
          <div className="right-column">
            <div className="image-placeholder"></div>
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;