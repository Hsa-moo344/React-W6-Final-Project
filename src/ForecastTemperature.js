import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastTemperature(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(
    function () {
      setLoaded(false);
    },
    [props.coordinates]
  );

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="col">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col-sm forecast-col" key={index}>
                  <ForecastDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "3499ef150985eccadd080ff408a018df";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayForecast);

    return null;
  }
}
