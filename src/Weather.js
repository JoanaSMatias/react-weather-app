import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
const [weatherData, setWeatherData] = useState ({ready: false});
const [city, setCity] = useState(props.defautCity)

function handleResponse (response) {
  setWeatherData({
    ready: true,
    temperature:response.data.main.temp,
    description:response.data.weather[0].main,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city:response.data.name,
    iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].main}@2x.png`,
    iconDescription: response.data.weather[0].main,
    date: new Date (response.data.dt * 1000)
  });
}

function handleSubmit(event) {
    event.preventDefault();
    search();
  }


  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
function search() {
  let apiKey = "ccd7e3ef34f8befeaea04a6b52aa4224";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse); 
}


if (weatherData.ready) {
  return(
    <div className="Weather">
      <h1>Weather App</h1>
      <h3 className="time"><FormattedDate date={weatherData.date}/></h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input 
              type="search" 
              placeholder="Search your city!" 
              className="form-control"
              autocomplete="off"
              onChange={handleCityChange}
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
      <WeatherInfo data={weatherData} />   
     </div>                   
  );
}
  else {
    search();
    return "Loading..."
  }  
}