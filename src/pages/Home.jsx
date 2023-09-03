import React from 'react';
import { Sections } from '../components/sections';
import './home.styles.css';

const Home = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Sections.CurrentWeatherSection />
      </div>
      <div className="grid-item" style={{ backgroundColor: '#b8b9ff38' }}>
        <Sections.CurrentWeatherDetailsSection />
      </div>
    </div>
  );
};

export default Home;
