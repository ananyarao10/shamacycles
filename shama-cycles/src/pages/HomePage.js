import React from 'react';
import './HomePage.css';

const HomePage = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">SHAMA CYCLES</h1>
          <div className="hero-underline"></div>
        </div>

        <div className="content-grid">
          <div className="left-column">
            <div>
              <p className="tagline">A home away from home for bike lovers.</p>
              <p className="tagline">Personalized sales, bike fitting, and service.</p>
              <p className="description">
                Making every new bike sale, upgrade and service specific for the customer and their needs.
              </p>

              <button onClick={() => setCurrentPage("Bike Fittings")}
                className={`cta-button nav-link ${currentPage === "Bike Fittings" ? 'active' : ''}`}>
                <span className="arrow">→</span>
                <span>schedule a bike fit</span>
              </button>
            </div>

            <img className="left-image-placeholder" src="shama_home_1.webp" alt=""></img>
            {/* <div className="left-image-placeholder"></div> */}
          </div>

          <div className="right-column">
            <div className="photo-grid">
              <img className="image-placeholder" src="shama_home_2.webp" alt=""></img>
              <img className="image-placeholder" src="shama_home_3.webp" alt=""></img>
              <img className="image-placeholder" src="shama_home_4.webp" alt=""></img>
              <img className="image-placeholder" src="shama_home_5.webp" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;