import React from 'react';
import { Sections } from '../components/sections';
import './home.styles.css';

const Home = () => {
  return (
    <div className="grid-container">
      <div className="grid-item-1 bg-grid-item-1">
        <Sections.CurrentWeatherSection />
      </div>
      <div className="grid-item-2 bg-grid-item-2">
        <Sections.CurrentWeatherDetailsSection />
      </div>
    </div>
  );
};

export default Home;
