import React from 'react';

const Weather = ({ data }) => {
  // Data isn't loaded yet
  if (!data.city) {
    return <></>;
  }

  return (
    <div className="weather-box">
      <div className="weather-header">{data.city}</div>
      <div className="weather-current">{data.temperature.current} °C</div>
      <div className="weather-further-data">
        Min: {data.temperature.minimum} °C | Max: {data.temperature.maximum} °C
      </div>
      <div className="weather-further-data">Humidity: {data.humidity}%</div>
      <div className="weather-further-data">Pressure: {data.pressure} hPa</div>
      <div className="weather-further-data">
        Wind speed: {data.wind.speed} m/sec
      </div>
      <div className="weather-further-data">Clouds: {data.clouds}</div>
      <div></div>
    </div>
  );
};

export default Weather;
