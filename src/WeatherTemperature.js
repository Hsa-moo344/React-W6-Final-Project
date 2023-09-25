import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      {Math.round(props.celsius)}
      <span className="units">°C</span>
    </div>
  );
}
