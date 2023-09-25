import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container-sm">
        <div className="header">
          <div className="header-body">
            <br />
            <Weather defaultCity="Mae Sot" />
          </div>
        </div>
        <br />
        <footer class="d-none d-md-block">
          <a
            href="https://githttps://github.com/Hsa-moo344/React-W6-Final-Project/tree/main/srchub.com/DelilahMureriwa/my-weather-app"
            target="_blank"
            rel="noreferrer"
            className="refer"
          >
            Hsa Moo Moo
          </a>
          {""} Open Source
        </footer>
      </div>
    </div>
  );
}
