import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './sections.styles.css';

const CurrentWeatherSection = () => {
  return (
    <div className="main-container">
      <div className="searchbar">
        <input placeholder="City name" className="search-input" />
        <AiOutlineSearch style={{ marginLeft: '-1.2rem' }} />
      </div>
      <div className="current-waeather-box">
        <img alt="weather icon" />
        <p className="current-temp-value">30°c</p>
        <p className="current-temp-text">Mostly cloudy</p>
      </div>
      <div className="date-time-box">
        <p>12-08-2023</p>
        <p>Fridday, 12:43</p>
        <p>Day</p>
      </div>
      <div className="location-box">
        <p>Sivasagar</p>
      </div>
    </div>
  );
};

export default CurrentWeatherSection;
