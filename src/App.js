import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/weather';
import { Dimmer, Loader, Input } from 'semantic-ui-react';

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
        })
    }
    fetchData();
  }, [lat, lon]);

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <div>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
          />
          <Weather weatherData={data} />
        </div>
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}

    </div>
  );
}

export default App;
