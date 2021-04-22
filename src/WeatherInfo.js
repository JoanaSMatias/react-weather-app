import React from "react";
import WeatherIcon from "./WeatherIcon"
import WeatherMetric from "./WeatherMetric"

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
                <WeatherIcon code={props.data.icon} className="WeatherIcon" size={65}/>
              </div>
              <WeatherMetric celsius = {props.data.temperature}/>
                <div className="col" id="descriptionWeather">
                  <span id="weatherResume">{props.data.description}</span>
                  <div className="col col-sx-2"></div>
                    <span id="humidity"></span>
                    <span id="percentageOfHumidity">Humidity: {props.data.humidity}%</span>
                  <div className="col col-sx-2"></div>
                    <span id="windSpeed"></span>
                    <span id="speed">Wind: {props.data.wind}Km/H</span>
                </div>
            </span>
        </div>
      </div>   
    </div>
    )
}