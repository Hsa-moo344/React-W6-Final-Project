import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }
  return (
    <div className="forecast-day">
      {day()}
      <div className="icon">
        <img
          src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`}
          alt="icon"
          width={90}
        />
      </div>
      <div></div>
      <span className="max">
        {Math.round(props.forecast.temp.max)}°{" "}
        <span className="min"> {Math.round(props.forecast.temp.min)}°</span>
      </span>
    </div>
  );
}
