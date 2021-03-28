import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
const [weatherData, setWeatherData] = useState ({ready: false});
function handleResponse (response) {
  setWeatherData({
    ready: true,
    temperature:response.data.main.temp,
    description:response.data.weather[0].main,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city:response.data.name,
    iconUrl: "",
    iconDescription: response.data.weather[0].main,
    date: response.data.dt * 1000
  });
}

if (weatherData.ready) {
  return(
    <div className="Weather">
      <h1>Weather App</h1>
      <h3 className="time">{weatherData.date}</h3>
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
                <h2>{weatherData.city}</h2>
              </div>
              <span id="descriptionBox">
                <div className="col-md-auto">
                  <span id="degrees">{Math.round (weatherData.temperature)}ºC</span>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.iconDescription}
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
                    <span id="weatherResume">{weatherData.description}</span>
                  <div class="col col-sx-2"></div>
                    <span id="humidity"></span>
                    <span id="percentageOfHumidity">Humidity: {weatherData.humidity}%</span>
                   <div class="col col-sx-2"></div>
                    <span id="windSpeed"></span>
                    <span id="speed">Wind: {weatherData.wind}Km/H</span>
                </div>
              </span>
          </div>
        </div>    
     </div>                   
  )
}
else {
 let apiKey = "ccd7e3ef34f8befeaea04a6b52aa4224";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";

}  
}