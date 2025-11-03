import { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = ({ currentPage, setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="home-container">
        <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="hero-title">SHAMA CYCLES</h1>
          <div className="hero-underline"></div>
        </div>

        <div className="content-grid">
          <div className={`left-column ${isVisible ? 'slide-in-left' : ''}`}>
            <div>
              <p className="tagline">A home away from home for bike lovers.</p>
              <p className="tagline">Personalized sales, bike fitting, and service.</p>
              <p className="description">
                Making every new bike sale, upgrade and service specific for the customer and their needs.
              </p>

              <button 
                onClick={() => setCurrentPage("Bike Fittings")}
                className={`cta-button nav-link ${currentPage === "Bike Fittings" ? 'active' : ''}`}
              >
                <span className="arrow">→</span>
                <span>schedule a bike fit</span>
              </button>
            </div>

             <div className="left-photo-grid">
                <img className="image-placeholder" src="shama_home_1.webp" alt="" />
                <img className="image-placeholder" src="shama_home_6.webp" alt="" />
              </div>

            <div className="stats-section">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Bikes Fitted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
          </div>

          <div className={`right-column ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="photo-grid">
              <div className="grid-item">
                <img className="image-placeholder" src="shama_home_2.webp" alt="" />
              </div>
              <div className="grid-item">
                <img className="image-placeholder" src="shama_home_3.webp" alt="" />
              </div>
              <div className="grid-item">
                <img className="image-placeholder" src="shama_home_4.webp" alt="" />
              </div>
              <div className="grid-item">
                <img className="image-placeholder" src="shama_home_5.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;