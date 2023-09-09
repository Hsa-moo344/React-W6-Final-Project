import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mae Sot" />
        <footer>
          The Weather App was coded by Hsa Moo Moo {""}
          <a
            href="https://github.com/Hsa-moo344/React-W6-Final-Project/tree/main/src"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
