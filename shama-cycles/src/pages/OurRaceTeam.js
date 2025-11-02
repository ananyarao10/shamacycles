import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './OurRaceTeam.css'

const OurRaceTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mensTeam = [
    'John Smith',
    'Mike Chen',
    'David Anderson',
    'Chris Martinez',
    'Ryan Thompson',
    'Alex Johnson',
    'Kevin Brown',
    'Daniel Lee',
    'Marcus Wilson',
    'Tyler Davis',
    'Jordan Taylor',
    'Brandon Moore'
  ];

  const womensTeam = [
    'Jennifer Wagner',
    'Landi Orza',
    'Kelley Devine',
    'Tracy Jones Martin',
    'Michelle Yoder',
    'Skevi Yoder',
    'Ash Lesniewski',
    'Audrey Maness',
    'Sarah Johnson',
    'Emily Rodriguez',
    'Amanda Garcia',
    'Jessica White'
  ];

  const sponsors = [
    { name: 'Sponsor One', logo: 'sponsor1.jpg', website: 'https://example.com' },
    { name: 'Sponsor Two', logo: 'sponsor2.jpg', website: 'https://example.com' },
    { name: 'Sponsor Three', logo: 'sponsor3.jpg', website: 'https://example.com' },
    { name: 'Sponsor Four', logo: 'sponsor4.jpg', website: 'https://example.com' },
    { name: 'Sponsor Five', logo: 'sponsor5.jpg', website: 'https://example.com' },
    { name: 'Sponsor Six', logo: 'sponsor6.jpg', website: 'https://example.com' },
    { name: 'Sponsor Seven', logo: 'sponsor7.jpg', website: 'https://example.com' }
  ];

  const teamImages = [
    'race_team_1.webp',
    'race_team_2.webp',
    'race_team_3.webp',
    'race_team_4.webp',
    'race_team_5.webp'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  return (
    <div className="about-page">
      <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="hero-title">OUR RACE TEAM</h1>
        <div className="hero-underline"></div>
      </div>

      <div className={`team-content ${isVisible ? 'fade-in' : ''}`}>
        {/* Team Photo Carousel */}
        <div className="carousel-section">
          <div className="carousel-container">
            <button onClick={prevImage} className="carousel-button carousel-button-left">
              <ChevronLeft size={32} />
            </button>
            
            <div className="carousel-image-wrapper">
              <img 
                src={teamImages[currentImageIndex]} 
                alt={`Team photo ${currentImageIndex + 1}`}
                className="carousel-image"
              />
            </div>

            <button onClick={nextImage} className="carousel-button carousel-button-right">
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="carousel-dots">
            {teamImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`dot ${index === currentImageIndex ? 'dot-active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Team Roster */}
        <div className="roster-section">
          
          <div className="roster-container">
            <div className="team-group">
              <h3 className="team-subtitle">Men's Team</h3>
              <div className="roster-columns">
                {mensTeam.map((member, index) => (
                  <div key={index} className="roster-item">
                    {member}
                  </div>
                ))}
              </div>
            </div>

            <div className="team-group">
              <h3 className="team-subtitle">Women's Team</h3>
              <div className="roster-columns">
                {womensTeam.map((member, index) => (
                  <div key={index} className="roster-item">
                    {member}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="sponsors-section">
          <div className="section-header">
            <h2 className="section-title">Our Sponsors</h2>
            <p className="section-description">
              Thank you to our amazing sponsors who make our racing dreams possible
            </p>
          </div>

          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-card"
              >
                <div className="sponsor-logo-container">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="sponsor-logo"
                  />
                </div>
                <p className="sponsor-name">{sponsor.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRaceTeam;