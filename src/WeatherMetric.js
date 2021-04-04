import React, {useState} from "react";

export default function WeatherMetric(props){
const [unit, setUnit] = useState("celsius");

function convertToFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") { 
return (
    <div className = "WeatherUnit">
    <span id="degrees">{Math.round (props.celsius)}ºC</span>
  <span id="unit">ºC | {" "}
  <a href="/" onClick={convertToFahrenheit}>ºF</a>
   </span> </div>
)} else {
      let fahrenheit = (props.celsius * (9 / 5) + 32);
      return (
        <div className = "WeatherUnit">
        <span id="degrees">{Math.round(fahrenheit)}ºF</span>
        <span id="unit">
  <a href="/" onClick={convertToCelsius}>ºC</a>
  {" "} | ºF
   </span> 
   </div>
      );
}
}
