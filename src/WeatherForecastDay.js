import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherForecast (props) {
    function maxTemperature (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`
    }
    
     function minTemperature (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`
    }
    
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay ();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

        return days[day]; 
        
    }
    
    
    
    
    
    return (
<div className = "ForecastRow">
    <div className ="ForecastDay">{day()}
    </div>  
    <WeatherIcon code={props.data.weather[0].icon} className="WeatherForecastIcon" size = {35}/>
    <div className = "ForecastTemperature">
        <span className ="MaxTemperature">{maxTemperature()}</span>{" "}|{" "}
        <span className ="MinTemperature">{minTemperature()}</span> 
    </div>
</div>
    );
}