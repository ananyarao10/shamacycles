import { useState, useEffect } from 'react';

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);
      
      useEffect(() => {
        setIsVisible(true);
      }, []);
    
      return (
        <div className="about-page">
          <div className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">COMMUNITY</h1>
            <div className="hero-underline"></div>
          </div>

        
      </div>
  );
};

export default Community;