import React from 'react';
import { Cards } from '../cards';
import { useSelector } from 'react-redux';

const CurrentWeatherDetailsSection = () => {
  const { weatherData, isLoading, error } = useSelector(
    (state) => state.weather
  );

  return (
    <div>
      <div className="weather-grid-container">
        {/* wind speed */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Wind"
            bodyText={`${weatherData?.current?.wind_kph} Km/h`}
            otherText={`${weatherData?.current?.wind_dir}`}
          />
        </div>
        {/* humidity */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Humidity"
            bodyText={`${weatherData?.current?.humidity}%`}
          />
        </div>
        {/* feels like */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Feels like"
            bodyText={`${weatherData?.current?.feelslike_c}°C`}
          />
        </div>
        {/* pressure */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Pressure"
            bodyText={`${weatherData?.current?.pressure_mb} mb`}
          />
        </div>
        {/* chance of rain */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Chances of rain"
            bodyText={`${weatherData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%`}
          />
        </div>
        {/* temp-hist */}
        {/* <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Temparature History"
            bodyText="test2"
          />
        </div> */}
        {/* sun */}
        {/* <div className="weather-grid-item">
          <Cards.WeatherCard title="Sun" bodyText="test2" />
        </div> */}
        {/* moon */}
        {/* <div className="weather-grid-item">
          <Cards.WeatherCard title="Moon" bodyText="test2" />
        </div> */}
      </div>
      <div className="footer-note">
        <p>All data are fetched from WeatherApi</p>
        <p>
          Made with ❤ by <a href="github.com/nihalp01">Nihalp01</a>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherDetailsSection;
