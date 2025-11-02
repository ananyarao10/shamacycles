import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './Bikes.css';

const Bikes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const brands = [
    { 
      name: '3T Bike', 
      logo: '3t_logo.jpg',
      description: 'Italian performance bikes known for innovation and aerodynamics',
      models: ['Exploro RaceMax', 'Strada', 'Extrema'],
      website: 'https://3t.bike'
    },
    { 
      name: 'Colnago', 
      logo: 'colnago_logo.jpg',
      description: 'Legendary Italian brand with decades of racing heritage',
      models: ['C68', 'V4Rs', 'G4-X'],
      website: 'https://colnago.com'
    },
    { 
      name: 'Quintana Roo', 
      logo: 'quintana_logo.jpg',
      description: 'American triathlon and time trial specialists',
      models: ['PRsix', 'PRfive', 'PRthree'],
      website: 'https://quintanaroo.com'
    },
    { 
      name: 'Argon18', 
      logo: 'argon18_logo.jpg',
      description: 'Canadian engineering excellence in racing bikes',
      models: ['E-119 Tri+', 'Gallium Pro', 'Dark Matter'],
      website: 'https://argon18.com'
    },
    { 
      name: 'Cipollini', 
      logo: 'cipollini_logo.jpg',
      description: 'Italian superbikes with distinctive style and performance',
      models: ['NK1K', 'RB1K', 'MCM'],
      website: 'https://cipollini.com'
    },
    { 
      name: 'Felt Bicycles', 
      logo: 'felt_logo.jpg',
      description: 'Performance bikes across all disciplines',
      models: ['AR', 'FR', 'IA'],
      website: 'https://feltbicycles.com'
    },
    { 
      name: 'Alchemy', 
      logo: 'alchemy_logo.jpg',
      description: 'Handcrafted American custom bicycles',
      models: ['Ronin GR', 'Atlas', 'Helios'],
      website: 'https://alchemybikes.com'
    },
    { 
      name: 'Drop Cycles', 
      logo: 'drop_logo.jpg',
      description: 'Custom steel and titanium frame builders',
      models: ['Gravel', 'Road', 'All-Road'],
      website: 'https://dropcycles.com'
    },
    { 
      name: 'Officine Mattio', 
      logo: 'mattio_logo.jpg',
      description: 'Italian artisan frame builders',
      models: ['Granfondo', 'Competizione', 'Custom'],
      website: 'https://officine-mattio.com'
    },
    { 
      name: 'Time', 
      logo: 'time_logo.jpg',
      description: 'French carbon fiber pioneers',
      models: ['Alpe d\'Huez', 'Scylon', 'Adherent'],
      website: 'https://timesport.com'
    }
  ];

  const builds = [
    { id: 1, image: 'build1.jpg', name: 'Custom Colnago C68' },
    { id: 2, image: 'build2.jpg', name: 'Argon18 E-119 TT' },
    { id: 3, image: 'build3.jpg', name: 'Alchemy Gravel Custom' },
    { id: 4, image: 'build4.jpg', name: '3T Exploro RaceMax' }
  ];

  const closeDialog = () => {
    setSelectedBrand(null);
  };

  return (
    <div className="about-page">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">BIKES</h1>
        <div className="hero-underline"></div>
      </div>

      <div className={`bikes-content ${isVisible ? 'fade-in' : ''}`}>
        {/* Brands Section */}
        <div className="brands-section">
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="brand-card"
                onClick={() => setSelectedBrand(brand)}
              >
                <div className="brand-logo-container">
                  <img src={brand.logo} alt={brand.name} className="brand-logo" />
                </div>
                <h3 className="brand-name">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Builds Section */}
        <div className="builds-section">
          <h2 className="builds-title">See some of our latest builds!</h2>
          
          <div className="builds-grid">
            {builds.map((build) => (
              <div 
                key={build.id} 
                className="build-card"
              >
                <img src={build.image} alt={build.name} className="build-image" />
                <div className="build-name-overlay">
                  <span className="build-name">{build.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog Modal */}
      {selectedBrand && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close" onClick={closeDialog}>
              <X size={24} />
            </button>
            
            <div className="dialog-body">
              <div className="dialog-brand-section">
                <h2 className="dialog-title">{selectedBrand.name}</h2>
              </div>
              
              <div className="dialog-info">
                <div className="info-section">
                  <h3 className="info-heading">About</h3>
                  <p className="info-text">{selectedBrand.description}</p>
                </div>

                <div className="info-section">
                  <h3 className="info-heading">Popular Models</h3>
                  <ul className="models-list">
                    {selectedBrand.models.map((model, idx) => (
                      <li key={idx} className="model-item">{model}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <a 
                    href={selectedBrand.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="brand-website-link"
                  >
                    Visit {selectedBrand.name} Website →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bikes;