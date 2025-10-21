import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Bikes from './pages/Bikes';
import Services from './pages/Services';
import Community from './pages/Community';
import OurRaceTeam from './pages/OurRaceTeam';
import ContactUs from './pages/ContactUs';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'Home': return <HomePage />;
      case 'About': return <About />;
      case 'Bikes': return <Bikes />;
      case 'Services': return <Services />;
      case 'Community': return <Community />;
      case 'Our Race Team': return <OurRaceTeam />;
      case 'Contact Us': return <ContactUs />;
      default: return <HomePage />;
    }
  };
  
  return (
    <div className="app">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;