import { ToastNotification } from 'carbon-components-react';
import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import Weather from './components/Weather';

const App = () => {
  const [weather, setWeather] = useState({});
  const [toast, setToast] = useState({});

  const weatherLookup = async (city) => {
    try {
      const response = await (await fetch(`/weather?city=${city}`)).json();

      if (response.error) {
        setToast({
          kind: 'error',
          title: response.error,
          subtitle: response.message,
          onClose: () => setToast({}),
        });

        return;
      }

      setWeather(response);
    } catch (err) {
      console.log(err);

      setToast({
        kind: 'error',
        title: 'Internal Server Error',
        onClose: () => setToast({}),
      });

      return;
    }
  };

  return (
    <>
      <div id="toast-container">
        {toast.kind ? <ToastNotification {...toast} /> : <></>}
      </div>
      <h1 className="weather-app-header">Weather App - Squad 1</h1>
      <Searchbar onSearch={weatherLookup} />
      <Weather data={weather} />
    </>
  );
};

export default App;
