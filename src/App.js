import React, { useEffect, useState } from 'react';

const App = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      let response = await (await fetch('/api/weather?city=London')).json();

      console.log(response);
      setWeather(response);
    }

    fetchWeather();
  }, []);

  return <div>Weather: {JSON.stringify(weather)}</div>;
};

export default App;
