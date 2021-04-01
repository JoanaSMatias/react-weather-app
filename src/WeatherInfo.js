import React from "react";

export default function WeatherInfo(props){
    return (
        <div className = "WeatherInfo">
<div className="container" id="cityDescriptionContainer">
          <div className="row justify-content-md-center">
            <div className="col-sx"></div>
              <div className="col-md-auto">
                <h2>{props.data.city}</h2>
              </div>
              <span id="descriptionBox">
                <div className="col-md-auto">
                  <span id="degrees">{Math.round (props.data.temperature)}ºC</span>
                  <img
                    src={props.data.iconUrl}
                    alt={props.data.iconDescription}
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
                    <span id="weatherResume">{props.data.description}</span>
                  <div class="col col-sx-2"></div>
                    <span id="humidity"></span>
                    <span id="percentageOfHumidity">Humidity: {props.data.humidity}%</span>
                   <div class="col col-sx-2"></div>
                    <span id="windSpeed"></span>
                    <span id="speed">Wind: {props.data.wind}Km/H</span>
                </div>
              </span>
          </div>
        </div>   
        </div>
    )
}