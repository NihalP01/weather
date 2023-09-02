import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './sections.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../redux/thunks/weatherThunk';

const CurrentWeatherSection = () => {
  const { weatherData, isLoading, error } = useSelector(
    (state) => state.weather
  );
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getWeatherData(city));
  };

  const getCurrentTime = () => {
    const date = new Date(
      weatherData?.location?.localtime_epoch * 1000
    );
    return `${String(date.getDate()).padStart(2, 0)}-${String(
      date.getMonth() + 1
    ).padStart(2, 0)}-${date.getFullYear()}`;
  };

  return (
    <div className="main-container">
      <div className="searchbar">
        <input
          placeholder="City name"
          className="search-input"
          onChange={handleChange}
        />
        <AiOutlineSearch
          onClick={() => handleSubmit()}
          style={{
            marginLeft: '-1.7rem',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        />
      </div>
      <div className="current-weather-box">
        <img
          src={weatherData?.current?.condition?.icon}
          width={'100px'}
          height={'auto'}
          alt="weather icon"
        />
        <p className="current-temp-value">
          {weatherData?.current?.temp_c}
        </p>
        <p className="current-temp-text">
          {weatherData?.current?.condition?.text}
        </p>
      </div>
      <div className="date-time-box">
        <p className='date-time-text'>{getCurrentTime()}</p>
        <p className='date-time-text'>Fridday, 12:43</p>
        <p className='date-time-text'>{weatherData?.current?.is_day ? 'Day' : 'Night'}</p>
      </div>
      <div className="location-box">
        <p className='location-text'>
          {weatherData?.location?.name},{' '}
          {weatherData?.location?.region}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherSection;
