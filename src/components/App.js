import React, { useState } from "react";
import './../styles/App.css';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "2dd19214367c8635747920e2e7569ff2";

  const getWeather = async (e) => {
    if (e.key === "Enter") {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setCity("");
    }
  };
  
  return (
    <div className="container">
      <input
        type="text"
        className="search"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={getWeather}
      />

      {weather && weather.main && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <h1>{Math.round(weather.main.temp)}°F</h1>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      )}
    </div>



  );
}

export default App;

