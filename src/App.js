import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/weather';

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
      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          // console.log(result)
        })
    }
    fetchData();
  }, [lat,lon]);

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ) : (
        <div></div>
      )}

    </div>
  );
}

export default App;
