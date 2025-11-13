import { useState, useEffect } from 'react';
import './BikeServices.css';

const BikeServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
      
  useEffect(() => {
    setIsVisible(true);
  }, []);
    
  return (
    <div className="bike-services-page">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">BIKE SERVICES</h1>
        <div className="hero-underline"></div>
      </div>

      <section className="custom-builds-section">
        <div className="section-header">
          <h2 className="section-title">Custom Bike Builds</h2>
          <div className="title-accent"></div>
        </div>
        <div className="custom-builds-content">
          <div 
            className={`build-card ${activeCard === 'frames' ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard('frames')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-image frames-bg">
              <div className="card-overlay">
                <span className="card-icon">🚴</span>
              </div>
            </div>
            <h3 className="card-title">Frame Selection</h3>
            <p className="card-desc">Premium carbon and titanium frames from the world's leading manufacturers</p>
          </div>
          <div 
            className={`build-card ${activeCard === 'wheels' ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard('wheels')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-image wheels-bg">
              <div className="card-overlay">
                <span className="card-icon">⚙️</span>
              </div>
            </div>
            <h3 className="card-title">Wheelsets</h3>
            <p className="card-desc">Custom-laced or factory builds — aerodynamics meets reliability</p>
          </div>
          <div 
            className={`build-card ${activeCard === 'groups' ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard('groups')}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-image groups-bg">
              <div className="card-overlay">
                <span className="card-icon">⚡</span>
              </div>
            </div>
            <h3 className="card-title">Groupsets</h3>
            <p className="card-desc">Shimano, SRAM, Campagnolo — electronic or mechanical perfection</p>
          </div>
        </div>
      </section>

      <section className="service-maintenance-section">
        <div className="section-header-alt">
          <h2 className="section-title-right">Premium Components</h2>
          <div className="title-accent-right"></div>
        </div>
        <div className="service-grid">
          <div className="service-feature">
            <div className="feature-icon">🎯</div>
            <h3>Wheel Specialists</h3>
            <p className="feature-brands">HED • Princeton • Cantu • ENVE • ZIPP • Lightweight • Schmolke</p>
            <p className="feature-detail">Custom wheel builds from hub to rim. Every spoke tensioned to perfection.</p>
          </div>
          <div className="service-feature">
            <div className="feature-icon">⚙️</div>
            <h3>Aero Components</h3>
            <ul className="feature-list">
              <li>SLF EVO: 3D titanium pulleys with ceramic bearings</li>
              <li>Carbon chainrings & titanium chains</li>
              <li>12-speed Shimano Dura-Ace Di2</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="marginal-gains-section">
        <div className="gains-container">
          <div className="gains-content">
            <h2 className="gains-title">Marginal Gains</h2>
            <div className="gains-stats">
              <div className="stat-item">
                <span className="stat-number">+5W</span>
                <span className="stat-label">Ceramic Bearings</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">-30s</span>
                <span className="stat-label">Per 40km</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Precision</span>
              </div>
            </div>
            <p className="gains-text">Every watt counts. Ceramic bearings, latex tubes, deeper wheels — small upgrades that compound into real performance.</p>
            <p className="gains-text">We focus on what works, what's rideable, and what makes you faster and more confident on the bike.</p>
          </div>
        </div>
      </section>

      <section className="components-section">
        <div className="section-header">
          <h2 className="section-title">Components & Accessories</h2>
          <div className="title-accent"></div>
        </div>
        <div className="components-content">
          <div className="component-column">
            <h3>Rotor Components</h3>
            <ul>
              <li>Power meters, round & oval chainrings</li>
              <li>GRX, Shimano Road, SRAM AXS, 1x & 2x setups</li>
              <li>Crank lengths from 150–175 mm</li>
            </ul>
          </div>
          <div className="component-column">
            <h3>SRM Power</h3>
            <ul>
              <li>Crank lengths 155–175 mm</li>
              <li>Carbon and composite arms</li>
              <li>Chainrings from top brands</li>
            </ul>
          </div>
          <div className="component-column">
            <h3>Cockpit Components</h3>
            <p>Handlebars, stems, and seatposts — for road, gravel, and triathlon setups.</p>
            <p className="brands-small">Top brands: Zipp, Shimano, ENVE, Schmolke, THM, Darimo, Thomson, Deda, Profile Design, 3T, 51 Speedshop</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BikeServices;