import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import ForecastTemperature from "./ForecastTemperature";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (loaded) {
    return (
      <div>
        <h1>{weather.city}</h1>
        <div className="row">
          <div className="col-sm-7">
            <div className="date">
              <span className="day">
                <FormatDate date={weather.date} />
              </span>
              <span className="description">{weather.description}</span>
            </div>
          </div>
          <div className="col-sm-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city..."
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1.5 main">
            <div className="main-icon">
              <img src={weather.icon} alt="weather-icon" width="120" />
            </div>
          </div>
          <div className="col-sm-5 temp main">
            <WeatherTemperature celsius={weather.temperature} />
          </div>
          <div className="col-4 appearance">
            <ul>
              <li>
                Humidity: <span className="humidity"></span>
                {weather.humidity}%
              </li>
              <li>
                Wind: <span className="wind"></span>
                {Math.round(weather.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
        <br />
        <ForecastTemperature coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
