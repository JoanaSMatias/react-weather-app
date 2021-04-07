import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
         <Weather defaultCity="New York" />
        <p>
        This project was coded by {" "}
          <a
            href="https://www.linkedin.com/in/joana-sofia-matias-a4206711b/"
            target="_blank"
            rel="noreferrer"
          >
        Joana Matias
          </a>{" "}
        and is {" "}      
          <a
            href="https://github.com/JoanaSMatias/react-weather-app"
            target="_blank" 
            rel="noreferrer"
          >
        open-sourced on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}


export default App;
