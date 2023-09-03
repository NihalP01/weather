import React from 'react';
import './cards.styles.css';

const WeatherCard = (props) => {
  const { title, bodyText, otherText } = props;
  return (
    <div className="card-container">
      <p className="card-title">{title}</p>
      <div>
        <p className="card-body">{bodyText}</p>
        <p
          style={{
            marginTop: '0.5rem',
            fontWeight: 400,
            color: 'white',
          }}
        >
          {otherText}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
