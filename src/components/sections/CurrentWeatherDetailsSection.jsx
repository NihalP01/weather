import React from 'react';
import { Cards } from '../cards';
import { useSelector } from 'react-redux';

const CurrentWeatherDetailsSection = () => {
  const { weatherData } = useSelector((state) => state.weather);

  return (
    <div>
      <div className="weather-grid-container">
        {/* wind speed */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Wind"
            bodyText={
              weatherData?.current
                ? `${weatherData?.current?.wind_kph} Km/h`
                : '0 Km/h'
            }
            otherText={
              weatherData?.current ? `${weatherData?.current?.wind_dir}` : ''
            }
          />
        </div>
        {/* humidity */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Humidity"
            bodyText={
              weatherData?.current
                ? `${weatherData?.current?.humidity}%`
                : '0 %'
            }
          />
        </div>
        {/* feels like */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Feels like"
            bodyText={
              weatherData?.current
                ? `${weatherData?.current?.feelslike_c}°C`
                : '0 °C'
            }
          />
        </div>
        {/* pressure */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Pressure"
            bodyText={
              weatherData?.current
                ? `${weatherData?.current?.pressure_mb} mb`
                : '0 mb'
            }
          />
        </div>
        {/* chance of rain */}
        <div className="weather-grid-item">
          <Cards.WeatherCard
            title="Chances of rain"
            bodyText={
              weatherData?.forecast
                ? `${weatherData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%`
                : '0 %'
            }
          />
        </div>
        {/* temp-hist */}
        <div className="weather-grid-item">
          <Cards.WeatherCard title="Temparature History">
            <div>
              <p className="child-body">
                Max:{' '}
                {weatherData?.forecast
                  ? `${weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c}°C`
                  : '0°C'}
              </p>
              <p className="child-body">
                Min:{' '}
                {weatherData?.forecast
                  ? `${weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}°C`
                  : '0°C'}
              </p>
            </div>
          </Cards.WeatherCard>
        </div>
        {/* sun */}
        <div className="weather-grid-item">
          <Cards.WeatherCard title="Sun">
            <div>
              <p className="child-body">
                Rise: {weatherData?.forecast?.forecastday[0]?.astro?.sunrise}
              </p>
              <p className="child-body">
                Set: {weatherData?.forecast?.forecastday[0]?.astro?.sunset}
              </p>
            </div>
          </Cards.WeatherCard>
        </div>
        {/* moon */}
        <div className="weather-grid-item">
          <Cards.WeatherCard title="Moon">
            <div>
              <p className="child-body">
                Rise: {weatherData?.forecast?.forecastday[0]?.astro?.moonrise}
              </p>
              <p className="child-body">
                Set: {weatherData?.forecast?.forecastday[0]?.astro?.moonset}
              </p>
            </div>
          </Cards.WeatherCard>
        </div>
      </div>
      <div className="footer-note">
        <p>
          All data are fetched from{' '}
          <a href="https://www.weatherapi.com/">Weatherapi</a>
        </p>
        <p>
          Made with ❤ by <a href="https://github.com/nihalp01">Nihalp01</a>
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherDetailsSection;
