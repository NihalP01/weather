import React from 'react';
import './cards.styles.css';

const WeatherCard = () => {
  return (
    <div className="card-container">
      <p className="card-title">Humidity</p>
      <div>
        <p className="card-body">Text</p>
        <p
          style={{
            marginTop: '0.5rem',
            fontWeight: 400,
            color: 'white',
          }}
        >
          Addtional text
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
