import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Bikes from './pages/Bikes';
import Gear from './pages/Gear';
import BikeServices from './pages/BikeServices';
import BikeFittings from './pages/BikeFittings';
import Community from './pages/Community';
import OurRaceTeam from './pages/OurRaceTeam';
import ContactUs from './pages/ContactUs';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'Home': return <HomePage currentPage={currentPage} setCurrentPage={setCurrentPage}/>;
      case 'About': return <About />;
      case 'Bikes': return <Bikes />;
      case 'Gear': return <Gear />;
      case 'Bike Services': return <BikeServices />;
      case 'Bike Fittings': return <BikeFittings />;
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
      <Footer setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default App;