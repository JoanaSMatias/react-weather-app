import React from "react";
import "./Weather.css";
export default function Weather(){
  return(
    <div className="Weather">
      <h1>Weather App</h1>
      <h3 className="time">Friday</h3>
      <form>
        <div className="row">
          <div className="col-9">
            <input 
              type="search" 
              placeholder="Search your city!" 
              className="form-control"
              autocomplete="off"
              autoFocus="on"
              
            />
          </div>
          <div className="col-1">
            <input 
              type="submit" 
              value="Search" 
              className="btn btn-primary"/>
          </div>
        </div>
      </form>
      <br />
        <div className="container" id="cityDescriptionContainer">
          <div className="row justify-content-md-center">
            <div className="col-sx"></div>
              <div className="col-md-auto">
                <h2>Lisbon</h2>
              </div>
              <span id="descriptionBox">
                <div className="col-md-auto">
                  <span id="degrees">11ºC</span>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                    alt="Sunny"
                  /> 
                </div>
                <div className="form-check form-check-inline" id="metricButton1">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="inlineRadio1" 
                    value="option1" 
                    checked/>
                  <label 
                    id="metric" 
                    className="form-check-label" 
                    for="inlineRadio1">
                      Celcius
                  </label>
                </div>
                <div className="form-check form-check-inline" id="metricButton2">
                  <input 
                    clasName="form-check-input" 
                    type="radio" 
                    name="inlineRadioOptions" 
                    id="inlineRadio2" 
                    value="option2"/>
                  <label
                    id="metric"
                    className="form-check-label"
                    for="inlineRadio2">
                      Fahrenheit 
                  </label>
                </div>
                <div class="col" id="descriptionWeather">
                    <span id="weatherResume">Cloudy</span>
                  <div class="col col-sx-2"></div>
                    <span id="humidity"></span>
                    <span id="percentageOfHumidity">Humidity: 72%</span>
                   <div class="col col-sx-2"></div>
                    <span id="windSpeed"></span>
                    <span id="speed">Wind: 13 km/H</span>
                </div>
              </span>
          </div>
        </div>    
     </div>                   
  )  
}