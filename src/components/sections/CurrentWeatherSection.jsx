import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './sections.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../redux/thunks/weatherThunk';
import { Utils } from '../../utils/Utils';
import Loader from '../loader/Loader';

const CurrentWeatherSection = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { weatherData, isLoading, error } = useSelector(
    (state) => state.weather
  );
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    if (city.trim() !== '') {
      dispatch(getWeatherData(city));
    }
  };

  return (
    <div className="main-container">
      <div className="searchbar">
        <input
          placeholder="City name"
          className="search-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <AiOutlineSearch
          onClick={() => handleSubmit()}
          style={{
            marginLeft: '-2rem',
            fontSize: '1.9rem',
            cursor: 'pointer',
            color: 'black',
          }}
        />
      </div>
      {weatherData?.current !== undefined ? (
        <div>
          <div className="current-weather-box">
            <img
              src={weatherData?.current?.condition?.icon}
              width={'100px'}
              height={'100px'}
              alt="weather condition"
            />
            <p className="current-temp-value">
              {weatherData?.current?.temp_c}°C
            </p>
            <p className="current-temp-text">
              {weatherData?.current?.condition?.text}
            </p>
          </div>
          <div className="date-time-box">
            <p style={{ fontSize: '1.1rem' }}>---- Local time ----</p>
            <p className="date-time-text">
              {' '}
              {Utils.formattedDate(
                weatherData?.location?.localtime_epoch * 1000
              )}
            </p>
            <p className="date-time-text">
              {Utils.formattedDayTime(
                weatherData?.location?.localtime_epoch * 1000
              )}
            </p>
            <p className="date-time-text">
              {weatherData?.current?.is_day ? 'Day' : 'Night'}
            </p>
          </div>
          <div className="location-box">
            <p className="location-text">
              {weatherData?.location?.name}, {weatherData?.location?.region}
            </p>
          </div>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div style={{ marginTop: '2rem' }}>
              <Loader />
            </div>
          ) : weatherData?.error ? (
            <p className="initial-text">{weatherData?.error?.message}</p>
          ) : error ? (
            <p className="initial-text">{error}</p>
          ) : (
            <p className="initial-text">Search any city to continue</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrentWeatherSection;
