import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Bikes.css';

const Bikes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const brands = [
    { 
      name: '3T Bike', 
      logo: '3t_2.webp',
      description: 'Italian performance bikes known for innovation and aerodynamics',
      uniqueness: 'What makes 3T special is their engineering-first approach and willingness to challenge convention. Perfect for riders who want cutting-edge aerodynamics and versatility in one package.',
      bestFor: 'Gravel racers, triathletes, and road cyclists seeking maximum efficiency',
      gallery: ['3t_1.jpg', '3t_2.jpg', '3t_3.jpg']
    },
    { 
      name: 'Colnago', 
      logo: 'colnago_3.webp',
      description: 'Legendary Italian brand with decades of racing heritage',
      uniqueness: 'Colnago represents the pinnacle of Italian cycling tradition with iconic designs and unmatched racing pedigree. Their frames blend artistry with performance.',
      bestFor: 'Enthusiasts who appreciate heritage, collectors, and competitive racers',
      gallery: ['colnago_1.webp', 'colnago_2.webp', 'colnago_3.webp']
    },
    { 
      name: 'Quintana Roo', 
      logo: 'quintana_3.webp',
      description: 'American triathlon and time trial specialists',
      uniqueness: 'Purpose-built exclusively for triathlon and time trials with features like integrated storage and optimized positioning. Every detail focused on going fast alone.',
      bestFor: 'Triathletes and time trialists who demand specialized equipment',
      gallery: ['quintana_1.webp', 'quintana_2.webp', 'quintana_3.webp']
    },
    { 
      name: 'Argon18', 
      logo: 'argon_2.webp',
      description: 'Canadian engineering excellence in racing bikes',
      uniqueness: 'Argon18 combines aerospace-grade engineering with real-world testing. Their 3D System allows precise fit adjustments for optimal power transfer and comfort.',
      bestFor: 'Serious racers and triathletes seeking measurable performance gains',
      gallery: ['argon_1.webp', 'argon_2.webp', 'argon_3.wepb']
    },
    { 
      name: 'Cipollini', 
      logo: 'cipollini_2.webp',
      description: 'Italian superbikes with distinctive style and performance',
      uniqueness: 'Named after champion Mario Cipollini, these bikes are as much about making a statement as winning races. Bold Italian design meets uncompromising performance.',
      bestFor: 'Riders who want to stand out and go fast with unmistakable style',
      gallery: ['cipollini_1.webp', 'cipollini_2.webp', 'cipollini_3.webp']
    },
    { 
      name: 'Felt Bicycles', 
      logo: 'felt_1.webp',
      description: 'Performance bikes across all disciplines',
      uniqueness: 'Felt pioneered many modern bike technologies and offers exceptional value without compromising quality. Their range covers every cycling discipline with proven designs.',
      bestFor: 'Performance-minded cyclists seeking reliability across all riding styles',
      gallery: ['felt_1.webp']
    },
    { 
      name: 'Alchemy', 
      logo: 'alchemy_3.webp',
      description: 'Handcrafted American custom bicycles',
      uniqueness: 'Every Alchemy frame is handmade in Denver with custom geometry tailored to you. True craftsmanship meets modern materials for a bike that fits like nothing else.',
      bestFor: 'Riders seeking a truly custom, made-for-you bicycle experience',
      gallery: ['alchemy_1.webp', 'alchemy_2.webp', 'alchemy_3.webp']
    },
    { 
      name: 'Drop Cycles', 
      logo: 'drop_1.webp',
      description: 'Custom steel and titanium frame builders',
      uniqueness: 'Drop specializes in timeless steel and titanium frames built to your exact specifications. These bikes age beautifully and ride with unmatched character.',
      bestFor: 'Riders who value craftsmanship, durability, and the classic ride quality of steel',
      gallery: ['drop_1.webp', 'drop_2.webp', 'drop_3.webp']
    },
    { 
      name: 'Officine Mattio', 
      logo: 'mattio_1.webp',
      description: 'Italian artisan frame builders',
      uniqueness: 'Small-batch Italian artisans who treat each frame as a work of art. Combining old-world craftsmanship with modern technology for heirloom-quality bicycles.',
      bestFor: 'Discerning cyclists who want exclusivity and Italian artisan quality',
      gallery: ['mattio_1.webp']
    },
    { 
      name: 'Time', 
      logo: 'time_1.webp',
      description: 'French carbon fiber pioneers',
      uniqueness: 'Time invented carbon fiber tubes and pioneered advanced layup techniques. Their frames are known for exceptional comfort without sacrificing stiffness.',
      bestFor: 'Endurance riders and cyclists prioritizing all-day comfort with performance',
      gallery: ['time_1.webp', 'time_2.webp', 'time_3.webp']
    }
  ];

  const builds = [
    { id: 1, image: 'guru_build.webp' },
    { id: 2, image: 'argon_build.webp' },
    { id: 3, image: 'build.webp' },
    { id: 4, image: 'alchemy_build.webp' }
  ];

  const closeDialog = () => {
    setSelectedBrand(null);
    setSelectedImage(0);
  };

  const nextImage = () => {
    if (selectedBrand) {
      setSelectedImage((prev) => (prev + 1) % selectedBrand.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedBrand) {
      setSelectedImage((prev) => (prev - 1 + selectedBrand.gallery.length) % selectedBrand.gallery.length);
    }
  };

  return (
    <div className="about-page">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">BIKES</h1>
        <div className="hero-underline"></div>
      </div>

      <div className={`bikes-content ${isVisible ? 'fade-in' : ''}`}>
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

        <div className="builds-section">
          <h2 className="builds-title">See some of our latest builds!</h2>
          
          <div className="builds-grid">
            {builds.map((build) => (
              <div 
                key={build.id} 
                className="build-card"
              >
                <img src={build.image} alt={build.name} className="build-image" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedBrand && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close" onClick={closeDialog}>
              <X size={24} />
            </button>
            
            <div className="dialog-body">
              <div className="dialog-brand-section">
                <h2 className="dialog-title">{selectedBrand.name}</h2>
                <p className="info-text">{selectedBrand.description}</p>
              </div>
              
              <div className="dialog-info">
                <div className="info-section">
                  <h3 className="info-heading">What makes them unique</h3>
                  <p className="info-text">{selectedBrand.uniqueness}</p>
                </div>

                <div className="info-section">
                  <h3 className="info-heading">Best suited for</h3>
                  <p className="info-text best-for-text">{selectedBrand.bestFor}</p>
                </div>

                <div className="info-section">
                  <div className="gallery-container">
                    <div className="gallery-main">
                      <button className="gallery-arrow gallery-arrow-left" onClick={prevImage}>
                        <ChevronLeft size={32} />
                      </button>
                      <img 
                        src={selectedBrand.gallery[selectedImage]} 
                        alt={`${selectedBrand.name} ${selectedImage + 1}`}
                        className="gallery-main-image"
                      />
                      <button className="gallery-arrow gallery-arrow-right" onClick={nextImage}>
                        <ChevronRight size={32} />
                      </button>
                    </div>
                    <div className="gallery-indicator">
                      {selectedBrand.gallery.map((_, idx) => (
                        <span
                          key={idx}
                          className={`gallery-dot ${selectedImage === idx ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
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