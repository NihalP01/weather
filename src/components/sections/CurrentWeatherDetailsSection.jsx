import React from 'react';
import { Cards } from '../cards';

const CurrentWeatherDetailsSection = () => {
  return (
    <div>
      <div className="weather-grid-container">
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* wind speed */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* humidity */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* feels like */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* pressure */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* temp-hist */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* sun */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
        {/* moon */}
        <div className="weather-grid-item">
          <Cards.WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetailsSection;
